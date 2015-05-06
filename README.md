# Zombie_Diner

## The Walking Fed

A horrible disease outbreak has overtaken much of the world and turned ordinary people into zombies.  As the zombie population grows, they have found that they have nowhere to eat.  My friend Rick sees an amazing business opportunity to feed all of these zombies and creates a diner called "The Walking Fed".  Rick needs to get the word out, so he has asked me to create a web application to host his menu (they're undead, but it's also the 21st century).

This project is that web application.

Feature Spec:

1. A user can view all the dishes available at the Walking Fed Diner.
- A user can create new dishes (name, price, category, image url).
- A user can update existing dishes.
- A user can remove dishes.
- A user can view all current dish categories.
- A user can create new categories.
- A user can update an existing category.
- A user can remove a category.


Modules Used:

 1. body-parser:  provides JSON parsing of message bodies
 - cors:  provides cross-origin resource sharing
 - express:  web server framework
 - sqlite3:  backend database for persistence of data

To download the code and run it on localhost:
 1. In a new directory on your localhost, run
 	`git clone https://github.com/scmgithub/Zombie_Diner.git`
 - `cd Zombie_Diner`
 - `npm install`
 - The server requires a file "secrets.json" next to it, containing code such as this:

 ```{
	"port" : 3000
}```

You will need to add this manually.
 - To start the server, `node server.js`.
 - You can then visit localhost:3000 (or whatever port you set in secrets.json) to use the app.

Link to live URL:
 The app can be found [here](http://www.stevemcintosh.us) or [here](http://104.236.90.68:80).
