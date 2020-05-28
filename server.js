var events = require('events');
var util = require('util');
var fs = require("fs");
const qs = require('qs');
var http = require('http');
var path = require('path');
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./dataBase/DB.db');

/*sesiune*/
var session={userName :'', email:'', password:''};

const BoRe_homejs = fs.readFileSync("./js/BoRe_home1.1.js", "UTF8");
const imgGenericBook = fs.readFileSync("./images/genericBook.jpg");
const indexCSS = fs.readFileSync("./css/index.css", "UTF8");
const BoRe_home_LoggedInjs = fs.readFileSync("./js/BoRe_home_LoggedIn1.1.js", "UTF8");
const myAccountCSS = fs.readFileSync("./css/My_Account1.1.css", "UTF8");
const whatSHotCSS = fs.readFileSync("./css/What's_Hot1.1.css", "UTF8");
const usersFollowedCSS = fs.readFileSync("./css/Users_Followed1.1.css", "UTF8");
const usersFollowedjs = fs.readFileSync("./js/Users_followed1.1.js", "UTF8");
const myGroupsCSS = fs.readFileSync("./css/My_Groups1.1.css", "UTF8");
const myGroupsjs = fs.readFileSync("./js/My_Groups1.1.js", "UTF8");
const groupPageCSS = fs.readFileSync("./css/Group_Page1.1.css", "UTF8");
const groupPagejs = fs.readFileSync("./js/Group_Page1.1.js", "UTF8");
const bookPageCSS = fs.readFileSync("./css/Book_Page1.1.css", "UTF8");
const bookPagejs = fs.readFileSync("./js/Book_Page1.1.js", "UTF8");
const BoRe_Loginjs = fs.readFileSync("./js/BoRe_Login1.1.js", "UTF8");



var bookCovers = [];
var counter = 0;
var userImages = [];
var groupImages = [];

db.all('select Cover from Books', [], (err, rows) => {
    if (err) {
        throw err;
    }
    rows.forEach((row) => {
        counter++;
        bookCovers[counter] = row.Cover;
    });
});

counter = 0;
db.all('select Photo from Users', [], (err, rows) => {
    if (err) {
        throw err;
    }
    rows.forEach((row) => {
        counter++;
        userImages[counter] = row.Photo;
    });
});

counter = 0;
db.all('select Picture from Groups', [], (err, rows) => {
    if (err) {
        throw err;
    }
    rows.forEach((row) => {
        counter++;
        groupImages[counter] = row.Picture;
    });
});

db.close();


var server = http.createServer(function (req, res) {
    console.log('request was made ' + req.url);
    if (req.url === '/BoRe_home1.1.html' || req.url === '/' || req.url === '/bookWormhole') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream('BoRe_home1.1.html').pipe(res);
    }

    if (req.url === '/css/index.css') {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(indexCSS);
        res.end();
    }

    if (req.url === '/js/BoRe_home1.1.js') {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(BoRe_homejs);
        res.end();
    }

    if (req.url === '/images/genericBook.jpg') {
        res.writeHead(200, { 'Content-Type': 'image/jpeg' });
        res.write(imgGenericBook);
        res.end();
    }

    if (req.url === '/BoRe_LogIn1.1.html') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream('BoRe_LogIn1.1.html').pipe(res);
    }

    if (req.url === '/js/BoRe_Login1.1.js') {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(BoRe_Loginjs);
        res.end();
    }


    if (req.url === '/BoRe_home_LoggedIn1.1.html?' || req.url === '/BoRe_home_LoggedIn1.1.html') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream('BoRe_home_LoggedIn1.1.html').pipe(res);
    }

    if (req.url === '/js/BoRe_home_LoggedIn1.1.js') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(BoRe_home_LoggedInjs);
        res.end();
    }

    for (i = 1; i <= bookCovers.length; i++) {
        if (req.url === "/" + bookCovers[i]) {
            console.log(bookCovers[i]);
            res.writeHead(200, { 'Content-Type': 'image/jpeg' });
            var imagine = fs.readFileSync("./" + bookCovers[i]);
            res.write(imagine);
            res.end();
        }
    }

    if (req.url === '/New_Account1.1.html') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream('New_Account1.1.html').pipe(res);
    }

    if (req.url === '/My_Account1.1.html') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream('My_Account1.1.html').pipe(res);
    }

    if (req.url === '/css/My_Account1.1.css') {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(myAccountCSS);
        res.end();
    }

    if (req.url === "/What's_hot1.1.html") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream("What's_Hot1.1.html").pipe(res);
    }

    if (req.url === "/css/What's_Hot1.1.css") {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(whatSHotCSS);
        res.end();
    }

    if (req.url === "/Users_Followed1.1.html") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream("Users_Followed1.1.html").pipe(res);
    }

    if (req.url === "/css/Users_Followed1.1.css") {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(usersFollowedCSS);
        res.end();
    }

    if (req.url === '/js/Users_followed1.1.js') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(usersFollowedjs);
        res.end();
    }

    for (i = 1; i <= userImages.length; i++) {
        if (req.url === "/" + userImages[i]) {
            console.log(userImages[i]);
            res.writeHead(200, { 'Content-Type': 'image/jpeg' });
            var imagine = fs.readFileSync("./" + userImages[i]);
            res.write(imagine);
            res.end();
        }
    }

    if (req.url === "/My_Groups1.1.html") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream("My_Groups1.1.html").pipe(res);
    }

    if (req.url === "/css/My_Groups1.1.css") {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(myGroupsCSS);
        res.end();
    }

    if (req.url === '/js/My_Groups1.1.js') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(myGroupsjs);
        res.end();
    }

    for (i = 1; i <= groupImages.length; i++) {
        if (req.url === "/" + groupImages[i]) {
            console.log(groupImages[i]);
            res.writeHead(200, { 'Content-Type': 'image/jpeg' });
            var imagine = fs.readFileSync("./" + groupImages[i]);
            res.write(imagine);
            res.end();
        }
    }

    if (req.url === "/Group_Page1.1.html") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream("Group_Page1.1.html").pipe(res);
    }

    if (req.url === "/css/Group_Page1.1.css") {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(groupPageCSS);
        res.end();
    }

    if (req.url === '/js/Group_Page1.1.js') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(groupPagejs);
        res.end();
    }

    if (req.url === "/Book_Page1.1.html") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream("Book_Page1.1.html").pipe(res);
    }

    if (req.url === "/css/Book_Page1.1.css") {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(bookPageCSS);
        res.end();
    }

    if (req.url === '/js/Book_Page1.1.js') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(bookPagejs);
        res.end();
    }






    /*requesturi*/
    if (req.url === '/loginRequest') {    //requestul de LOGIN
        console.log("DA FAQ?");
        var loginInfo='';
        var userInfo;
        req.on('data', function (chunk) {
            loginInfo+=chunk;
        });
        req.on('end', () => {
            userInfo=loginInfo.split("~");
            //console.log(loginInfo);
            console.log(userInfo[0]); //userName
            console.log(userInfo[1]); //email
            console.log(userInfo[2]); //password



            // cautam userul in baza de date

            var ok=0;
            let db = new sqlite3.Database('./dataBase/DB.db');
            db.all('select Name, email, password from Users', [], (err, rows) => {
                if (err) {
                    throw err;
                }
                rows.forEach((row) => {
                    console.log(row.Name);
                    console.log(row.email);
                    console.log(row.password);
                    if(row.Name==userInfo[0]&&row.email==userInfo[1]&&row.password==userInfo[2]){
                        ok++;
                    }
                });
                console.log(ok);
                if(ok>0){
                    console.log("Exista user");
                    session.userName=userInfo[0];
                    session.email=userInfo[1];
                    session.password=userInfo[2];
                }
                res.setHeader('Content-Type', 'application/json');
                res.write(ok.toString());
                res.end();
            });
            db.close();
        });
        req.on('error', (error) => {
            console.error(error);
        });
    }


});

server.listen(3000, '127.0.0.1');
console.log('Server Activated');







