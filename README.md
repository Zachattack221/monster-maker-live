# Monster Maker

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Visuals](#visuals)
5. [License](#license)
6. [Contributing](#contributing)

## Description
<!-- TODO: Re-host application on Heroku -->
[Link to Deployed Site on Heroku]() \

This application will allow a user to dynamically create, customize, and display monsters to be able to put them into a game such as DnD. Monsters can be generated from a variety of categories, including options for weapon choice.

Via an authentication process, a user can login to view their profile, and the monsters they have personally created. Users without an account will be able to view the database, however the creation feature is limited to logged-in users. This application aims to provide the user with a clean UI and a visually polished space to create and store content.

Additional Frameworks: Bootstrap 5.2 

## Installation
In the terminal, at the root level, run "npm i" to install the following dependencies.

Dependencies: express, express-handlebars, express-session, handlebars handlebars-async-helpers, sequelize, connect-session-sequelize, mysql2, bcrypt, dotenv, multer, and cloudinary.

Following npm install, run "mysql -u root -p" to enter sequel shell. When prompted enter password, then run "exit" to leave sequel shell. 

In the terminal, at the root level, enter "npm run db:sync" to ensure you are using the monsters_db. 

Following this, enter "npm run seed" to seed database with content.

## Usage
Once your installation process is complete, run "npm run start" to initialize, or "npm run watch" if you choose to run the host locally via nodemon (note, nodemon will need to be installed "npm install nodemon").

## Visuals
![featured monsters homepage](./screenshots/homepage_featured_monsters.png)
![create monster page](./screenshots/create_monster.png)
![public profile page](./screenshots/profile_page.png)

## License
This application is licensed with the MIT License.

## Contributing 
Team members:

<a href="https://github.com/Zachattack221">Zach van Dijk</a> \
<a href="https://github.com/Revilite">Jacob Lockhart</a> \
<a href="https://github.com/Christian-Hoffman">Christian Hoffman</a> \
<a href="https://github.com/gfinnie01">Grant Finnie</a> \
<a href="https://github.com/Apowers9">Andrew Powers</a>