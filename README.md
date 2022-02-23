## Cryptobase application

### About Project
Cryptobase is a crypto trading platform used for buying and selling of crypto assests.

## Application Features
-Dashboard for display of Total and availbale crypto coins.
- Signup and Login authentication system
-Page for the display and description of crypto currencies such as Bitcoin, Ethereum, LiteCoin, Binance Coin etc.
- A piechart showing the various amount of the crypto currency assets you have in pictorial view.
- Tradingview widget, a powerful chart for the display of realtime crypto currency trading activity.
- Buy Button for the purchase of crypto currency.
- Sell Button for the sale of crypto currency
- Portfolio section for the display of the amount of crypto currency asset you have in your wallet.

## Application Functionalities
- Buy default the application credits your wallet with up 1000 dollars to trade with.

To purchase a crypto currency asset, select of the crypto currencies dispaly on your dashboard you would want to purchase. 
-View the value of the current price of the crypto coin in dollars. 
-Input the value of the crypto you want to buy in dollars in the input form. 
The system will authomatically calculate the value of crypto asset then click on buy
-If your transaction is successful, this will display a modal with a message "Successful purchase" and the value of the crypto coin you purchase.

To Sell a crypto coin, select the particular crypto coin you want to sell, check also the amount of the particular crypto coin you have. Click input the amount you want to selll in the input box and click on the sell button. This would recalculate the amount of the value of the crypto asset you have.

The total value of your crypto assets is always displayed on your dashboard.


### Login Credentials: 
##### Username: admin 
##### Password: admin123

#### Live view of the application Demo can be found here- [Cryptobase application](https://crypto-base.netlify.app/)



### Pictorial View of the Application

Home page

![landing-page](https://user-images.githubusercontent.com/26815113/155330512-28823c82-f7f2-4d18-b00f-63f47ad1ce53.PNG)




Login Section:

![login](https://user-images.githubusercontent.com/26815113/155330818-a585356e-a7fa-4b17-957e-0623f9267be3.PNG)



Dashboard Display: 
![dashboard](https://user-images.githubusercontent.com/26815113/155331083-ac408180-6e67-4f9b-afd3-282a16478afe.PNG)



Crypto Currency Trading View:
![Trading-View](https://user-images.githubusercontent.com/26815113/155331485-af773bbd-8431-4154-9018-0fadd094ca56.PNG)




## How to use the application

## Table of Contents
- [Getting Started](#getting-started)
	- [Tools Required](#tools-required)
	- [Installation](#installation)
- [Development](#development)
- [Running the App](#running-the-app)
- [Deployment](#deployment)
- [Authors](#authors)
- [License](#license)

## Getting Started

#### Dependencies
##### Client Side

The project is built with;
* [React JS](https://beta.reactjs.org/) -Library for building user interfaces
* [Axios](https://axios-http.com) - Promise based HTTP client for the browser and node.js
* [Redux](https://redux.js.org/) - A Predictable State Container for JavaScript Applications.
* [Redux-Thunk](https://www.npmjs.com/package/redux-thunk) - A middleware that lets you call action creators that return a function instead of an action object.
* [React-router](https://reactrouter.com) - Enables the to implementation of dynamic routing in a web app.
* [Ant Design](https://ant.design) - A UI library that can be used with data flow solutions and application frameworks in any React ecosystem.


##### Server Side
* [Express JS](https://expressjs.com/) - flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
* [Bcrypt JS](https://www.npmjs.com/package/bcrypt) - This module enables storing of passwords as hashed passwords instead of plaintext.
* [Mongoose](https://mongoosejs.com) - Provides a straight-forward, schema-based solution to model application data.
* [Node.js](https://nodejs.org/en)- Cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.

* [dotenv](https://www.npmjs.com/package/dotenv)- dotenv allows you to separate secrets from your source code.

##### Database
* [MongoDB](https://www.mongodb.com)- As a document database, MongoDB makes it easy for developers to store structured or unstructured data

 
### Prerequisites
Ensure you have NodeJS installed by entering node -v on your terminal If you don't have NodeJS installed, go to the NodeJS Website, and follow the download instructions


### Tools Required
The following tools are required to run this application:

* A text editor like Visual Studio Code
* Command Line

### Getting the source code
You can clone the repository directly using this command:
git clone https://github.com/jamesoyanna/salesflare.git
OR clicking on the code button ontop to clone the application.

### Installation
Installation steps:

Node.js and Yarn or Npm
Your computer must have installed nodejs, and yarn to run this application You can download Node.js from https://nodejs.org and yarn from https://yarnpkg.com/lang/en/docs/install/ . NPM comes bundled with Node.js

![nodejs](https://user-images.githubusercontent.com/26815113/132867561-bf2ec1a2-cd63-461f-95dd-e95c1c6676c7.PNG)

## Install Npm Packages
After clonning the application, to run the client application locally, you will have to install all the dependencies and packages. 
Open your terminal and navigate into the client folder using the command:
cd client

 Run yarn or npm install from the root of the client folder.


#### Running the client App

  ``` 
Run yarn start or npm start from the root of the client folder to start the development server. 
Go to http://localhost:3000 on your browser. Your app should be running.
The app will automatically reload if you make changes to any of the source files.
  ```

#### Running the Server
Open the project folder you cloned. 
Create a .env file in the root folder
Fill in the following credentials:
PORT = 
DATABASE =
JWT_SECRET =

Run npm install from your terminal.
Then run npm start. 
Your server should start running on port 8888.

## Author

#### James Oyanna
* [GitHub](https://github.com/jamesoyanna)
* [LinkedIn](https://www.linkedin.com/in/jamesoyanna)


