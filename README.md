# Word Association Game.


![Home Flora](https://i.postimg.cc/vZMBpR6G/word-association-game-homepage.png)

## Introduction
Word Association Game is a vocabulary test with ten levels that ascendingly increase in complexity. the used API is from [RapidAPI](https://rapidapi.com/hub).

The game depends on building logical relationships between words, which is a great exercise for the brain and also makes one more fluent :nerd_face::memo:


## Features
- The ability to navigate between levels from 1 to 10.
- The score counter increase by one with every correct answer, and decrease by one with every wrong answer.
- The fronted part has been built with React library.
- The mini backend is built to protect the API key from being discoverable in the HTTP headers. 

## Using the Application
When you open the game, you select the level that you would like to start with, you then will be presented with question cards, you have to find the logical relationship between each word set and choose one of the two options. If you answer correctly you will gain a point, and you will lose one if the answer is wrong. your score counter will be at the top of the page. 

## Running Word Association Game Locally
1. Clone the project.
2. install dependencies by running (npm install or yarn install) in the command line/ terminal.
3. set the required environment variables: (PORT - the RapidAPI key).
4. start the backend by running (npm run start:backend).
5. Start the fronted by running (npm run start: frontend).

## Dependencies
- React
- React-DOM
- Axios
- Express.js
- Cors
- Dotenv
