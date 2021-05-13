# The Weather Channel
## About
This webapp was developed as a weather app. 
It is based on a open source [challenge for Sti](https://github.com/1STi/desafio-frontend/)

![Netlify](https://img.shields.io/netlify/ef854091-db7a-47c5-bfe0-f21f311d6ce4)
![GitHub](https://img.shields.io/github/license/jbtte/react-sti-weather)

## Table of Contents
<!--ts-->
   * [About](#about)
   * [Table of Contents](#table-of-contents)
   * [Project Status](#project-status)
   * [Features](#features)
   * [Live Link](#live-link)
   * [Instalation](#instalation)
      * [Dependencies](#dependencies)
      * [Local machine](#local-machine)
   * [Libraries and Technologies](#libraries-and-technologies)
   * [Available Scripts](#available-scripts)
   * [Code Status](#code-status)
      * [License](#license)
      * [Credits](#credits)
      * [Author](#author)
<!--te-->

## Project Status
In production
Version: 1.0.1

## Features
- [x] Shows the current weather and temperature in celsius for 10 major cities in Brazil
- [x] Search for city by name for the current weather and 3 day forecast


## Live link
https://agitated-aryabhata-2a9178.netlify.app/

## Instalation
### Dependencies
Before you begin the instalation process, you must have installed:
* [Git](https://git-scm.com)
* [Node.js](https://nodejs.org/en/)

Besides that you should have a code editor, for example [VSCode](https://code.visualstudio.com/)

You need to login to have an account on the [Weather API](https://www.weatherapi.com/) and generate an API key

### Local machine
```bash
# Clone the repository
$ git clone https://github.com/jbtte/react-sti-weather

# Enter project directory
$ cd react-sti-weather

# Install dependecies1
$ npm install -y
```

```bash
# Before firing up the server, it is necessary to open the code and create a .env file on the projects folder,
# add a REACT_APP_API_KEY and set it equal to your API key from the Weather API
// .env
REACT_APP_API_KEY=<API KEY>
```

```bash
# Execute application on development mode
$ react-scripts start

# Server will start on port:3000 - enter <http://localhost:3000>
```

## 🛠 Libraries and Technologies

The following tools where used:

- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [Create React App](https://facebook.github.io/create-react-app/docs/getting-started).

## Available Scripts

In the project directory, you can run:

 **`npm start`**

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

**`npm test`**

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

**`npm build`**

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

**`npm eject`**

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Code Status
### License
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <https://www.gnu.org/licenses/>

### Credits
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Author

<a href="jbtte.me">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/4759003?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>JP Baumotte</b></sub></a> <a href="https://jbtte.me">🚀</a>
 
 Made with ❤️ by JP Baumotte 👋🏽 Let's get in touch!

[![Linkedin Badge](https://img.shields.io/badge/-JP-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jbtte/)](https://www.linkedin.com/in/jbtte/) 
[![Gmail Badge](https://img.shields.io/badge/-jbaumotte@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:jbaumotteo@gmail.com)](mailto:jbaumotteo@gmail.com)
