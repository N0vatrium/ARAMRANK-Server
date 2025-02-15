const {blackListCache} = require('../server/cache');
const Cleantalk = require('cleantalk');

let cleantalkConnection = null

const blackListHandler = async (req, res, next) => {

  if (process.env.NODE_ENV === 'development') {
    next();
    return;
  }
  if (process.env.NODE_ENV === 'production' && !cleantalkConnection) {
    cleantalkConnection = new Cleantalk({auth_key: process.env.CLEANTALK});
  }

  const requestIP = req.ip;
  const blackListed = blackListCache.get(requestIP);

  if (blackListed === true) {
    res.status(401).send('I don\'t trust you enough to show you this data...');
    return;
  }
  else if (blackListed === false || blackListCache.isFull) {
    next();
    return;
  }

  const spamCheckResponse = cleantalkConnection.spamCheck(requestIP);

  try {
    await spamCheckResponse;
  }
  catch (error) {
    console.error('spamCheckError: ' + error);
    next();
    return;
  }

  if (shouldBlackList((await spamCheckResponse).data[requestIP])) {
    blackListCache.set(requestIP, true);
    res.status(401).send('nope');
  }
  else {
    blackListCache.set(requestIP, false);
    next();
  }
}


function shouldBlackList(spamCheckResponse) {
  return spamCheckResponse.appears || spamCheckResponse.in_antispam || (spamCheckResponse.spam_rate > 0.7 && spamCheckResponse.frequency > 8);
}


module.exports.blackListHandler = blackListHandler;
