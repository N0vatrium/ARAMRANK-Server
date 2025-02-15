# ALL RANDOM ALL RANK

[![Heroku App Status](http://heroku-shields.herokuapp.com/all-random-all-rank)](https://all-random-all-rank.herokuapp.com)

This is a website managing a fun ranking system for ARAM games in League of Legends.

### How to install

install Node.js [from here](https://nodejs.org/en/download/)

install docker [from here](https://docs.docker.com/engine/install/)

get yourself a [riot api key](https://developer.riotgames.com/)

go to dev and run `docker compose up dynamodb-local` then fill the .env.exemple file  
in an other shell, go to dev again and run `sh reset_db.sh` (it will output an error in the beginning the first time you run it)
then run `docker compose up main-app` => that's it you can open a browser and go to `localhost:8080`


### Built with

The technogies involved in this project are all available for free when used for small projects (such as this one).

The project was built with node JS, which can be downloaded [here](https://nodejs.org/en/download/)

The database is handled by Amazon DynamoDB. You can either [create a remote instance of DynamoDB](https://aws.amazon.com/dynamodb/) or [install and run a local one](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.html)

The players' data is accessed through [Riot API](https://developer.riotgames.com/).

The server is currently hosted on [Heroku](https://www.heroku.com/) (Platform as a Service).

### Future features ideas

* Badges for players achieving specific goals
* Page displaying the hierarchy behind ranks (since it is far from obvious)
* Overlay displaying aram borders and ranks (would be another project)
* Rework front end style for ranks, BOs, etc...

## Author

* **Alexandre Ferrera** - [my github](https://github.com/ferreraa)

## Acknowledgments

My thanks go to

* [Riot Games](https://www.riotgames.com/) for making this possible
* [Mingwei Samuel](https://github.com/MingweiSamuel) for providing TeemoJS
