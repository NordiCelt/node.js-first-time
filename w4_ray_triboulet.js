/*
Mr. Sammy, I am having a very hard time understanding what it is you want here.
It seems like you want us to utilize a web server, which I did, but for utilizing
the CMD line interface/Terminal for user input. In the process I end up setting up
using a server, getting user input, and displaying user input, but all on the Terminal;
this makes the web server completely unutilized. The below code will work exactly
the same if you delete every line up to "const readline".  I could create a small
web app that takes input, but it would require more than just one file. I would
need an html and css page and most likely some kind of database like SQL. Then I
could create an input form that would could be called and then interfaced with
using RESTful API, as you asked for. But It doesn't seem like I have the option
of uploading a bunch of files for this project like that.  So I am submitting this
with great fear that it will receive a terrible grade. The tasks in this class are
simple, but the instructions I am having a LOT of trouble understanding. I could
create whatever you need me to if I knew what it was I was supposed to do. I've been
messing with Front-End and Back-End Web Development, Java, C# (ASP.NET with some MVC
experience), MySQL, MS SQL Express, Windows Server, BASH Scripting on Linux, I've
programmed my own VIM and ZSH config files, and I maintain a GitHub profile.  I'm
no expert by any means, but I'm worried my negative grade is not due to my lack
of skill or learning as much as it is an expression of my understanding
the directions of what you want me to do. I appreciate your patience.

Setup: 
    1.  Install node.js
    2.  Use npm to install express.js in the folder you will be using this application
    3.  Open CMD and cd to the folder this app is installed in
    4.  Run the app by typing "node w4_ray_triboulet.js"
        Optional:  If you are using the Terminal in VSCode, then type "node .\w4_ray_triboulet.js"
*/

let express = require('express');  // node.js function that requires express.js
const app = express();  // calls express module
const http = require('http');  // web server utilization

// creates the http server and listens on port 55555, while handling incoming requests
http.createServer(app).listen(55555, function(req, res)
{
// user interface on command line interface
    // calls readline module from node.js
    const readline = require("readline");
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

    rl.question("Hi! What is your name ? ", function(name) {  // GET
        rl.question("What country are you from ? ", function(country) {  // 
            console.log(`\n${name}, is from ${country}`);  // 
            rl.close();
        });
    });

    rl.on("close", function() {
        console.log("Have a great rest of the week!");
        process.exit(0);
    });   
}
);   