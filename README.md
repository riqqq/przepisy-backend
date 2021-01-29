# Przepisy - recipes list website
Simple web app created with Node.js and mongoDB. This is the back-end of our application - it acts as a rest api which front-end connects to and gains information to fill the content.
## Project's aim
This is a university project. We aimed to create a website that can find available recipies considering what kind of products we have.
## Technologies
* Node.js v14.15.3
* mongoDB 3.6.3
## Launch instruction
To launch this project install it locally using npm:
```
npm install
node server.js
```
## Functionalities
* Add, edit and delete recipes in database
* Search desired recipes according to owned products

## REST API endpoints
* POST /api/przepis - creates a new przepis
* PUT /api/przepis - updates przepis
* GET /api/przepis/:id - gets a specific przepis
* GET /api/przepisy - gets a list of all przepisy
* DELETE /api/przepis/:id - deletes a specific przepis
* GET /api/przepisy/:products - gets a list of przepisy with given products

## Credits
* Krzysztof Pisarczyk
* Konrad Perszke

## Project status
Finished!
