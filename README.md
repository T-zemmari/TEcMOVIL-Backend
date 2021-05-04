<h1 align="center">
  <br>TEcMovil API REST
</h1>

<h4 align="center">Backend for a Mobile phone web app with node.js, express & Mongoose.</h4>

<br>
<p align="center">
  <a href="#about">About</a> •
  <a href="#usage">Usage</a> •
  <a href="#environment">Environment variables</a> •
  <a href="#dependencies">Dependencies</a> •
  <a href="#features">Features</a>
</p>

---

## About

<table>
<tr>
<td>
<br>

**This RESTful API** acts as a back-end for a TEc Movile Web app. Through this app, users can browse the website, see the different offers, choose a product, and if they want, make a purchase

The API is built on <b>Node.js</b> with the <b>Express</b> library, connected to a <b>Mongo</b> database through <b>Mongoose</b>. User authentication is done through <b>JWT</b>.

This project was created for educational purposes at <a href="https://geekshubsacademy.com/">GeeksHubs Academy</a>'s Full Stack Developer Bootcamp by Tarek Zemmari in Valencia, Spain on 2021-4-30 to 2021-05-10.


</td>
</tr>
</table>
<br>

## Usage



### <b>[Click here to view the API documentation](https://documenter.getpostman.com/view/14551935/TzRNEpuz)</b> or

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/e7eb70030ba882a484c1)

Alternatively, the project may be downloaded from <a href="https://github.com/T-zemmari/Backend_Projecto_Final/archive/refs/heads/main.zip">this link</a>. You're welcome to borrow our code.

<br>

* npm i
* npm start

* if you want to use Docker, please change in db.js ,the mongoose conexion:

 const QUERY_STRING = MONGO_USER ? 
 `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}`:
 `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}`

<div id="environment"></div>

##  Trello


![Trello](https://user-images.githubusercontent.com/76817211/116979811-bcbd7600-acc5-11eb-981e-6a595c41610b.gif)



We have used Trello for the distribution and control of tasks using Kanban and to plan the database structure and the API endpoints.

##  Postman

![Psotman documentation](https://user-images.githubusercontent.com/76817211/116979107-e033f100-acc4-11eb-86ad-fb39db08b5dd.gif)
![Animation](https://user-images.githubusercontent.com/76817211/116979120-e32ee180-acc4-11eb-9351-e9690ffde454.gif)

## Environment variables summary


* NODE_ENV: development/production - Changes default settings (default: development)
* PORT: Port for server to listen on (default: 3002)
* JWT_SECRET: Secret for JWT signing (required)
* MONGO_HOST = Database url (defaults to config)
* MONGO_PORT = Database port - not necessary if host is domain (defaults to config)
* MONGO_DBNAME = Database name (defaults to config)
* MONGO_USER = Database user (defaults to config)
* MONGO_PASSWORD = Database password (defaults to config)


<br>

## Dependencies

* express (server, endpoints and middleware)
* mongoose (ORM for Mongo)
* bcryptjs (password encryption)
* jsonwebtoken (authentication)
* multer

<br>

## Features

* RESTful architecture
* Log in & authentication over JWT


<br>