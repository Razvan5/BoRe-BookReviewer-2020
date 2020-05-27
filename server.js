var events=require('events'); 
var util=require('util');
var fs=require("fs");
var http=require('http');
var path=require('path');
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./dataBase/DB.db');

const BoRe_homejs = fs.readFileSync("./js/BoRe_home1.1.js", "UTF8");
const imgGenericBook= fs.readFileSync("./images/genericBook.jpg");
const indexCSS= fs.readFileSync("./css/index.css", "UTF8");
const BoRe_home_LoggedInjs=fs.readFileSync("./js/BoRe_home_LoggedIn1.1.js", "UTF8");
const myAccountCSS= fs.readFileSync("./css/My_Account1.1.css", "UTF8");

var bookCovers=[];
var nrOfBooks;
var counter=0;

db.all('select Cover from Books', [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {
        counter++;
      counter++;
      bookCovers[counter]=row.Cover;
      //console.log(bookCovers[counter]);
    });
  });

db.close();


var server = http.createServer(function(req,res){
    console.log('request was made '+req.url);
    if(req.url==='/BoRe_home1.1.html'||req.url==='/'||req.url==='/bookWormhole'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream('BoRe_home1.1.html').pipe(res);
    }

    if(req.url==='/css/index.css'){
        res.writeHead(200,{'Content-Type':'text/css'});
        res.write(indexCSS);
        res.end();
    }

    if(req.url==='/js/BoRe_home1.1.js'){
        res.writeHead(200,{'Content-Type':'text/css'});
        res.write(BoRe_homejs);
        res.end();
    }

    if(req.url==='/images/genericBook.jpg'){
        res.writeHead(200,{'Content-Type':'image/jpeg'});
        res.write(imgGenericBook);
        res.end();
    }

    if(req.url==='/BoRe_LogIn1.1.html'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream('BoRe_LogIn1.1.html').pipe(res);
    }

    if(req.url==='/BoRe_home_LoggedIn1.1.html?'||req.url==='/BoRe_home_LoggedIn1.1.html'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream('BoRe_home_LoggedIn1.1.html').pipe(res);
    }

    if(req.url==='/js/BoRe_home_LoggedIn1.1.js'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(BoRe_home_LoggedInjs);
        res.end();
    }

    for(i=1;i<=bookCovers.length;i++){
    if(req.url==="/"+bookCovers[i]){
        console.log(bookCovers[i]);
        res.writeHead(200,{'Content-Type':'image/jpeg'});
        var imagine=fs.readFileSync("./"+bookCovers[i]);
        res.write(imagine);
        res.end();
    }
    }

    if(req.url==='/New_Account1.1.html'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream('New_Account1.1.html').pipe(res);
    }

    if(req.url==='/My_Account1.1.html'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream('My_Account1.1.html').pipe(res);
    }

    if(req.url==='/css/My_Account1.1.css'){
        res.writeHead(200,{'Content-Type':'text/css'});
        res.write(myAccountCSS);
        res.end();
    }
    
});

server.listen(3000,'127.0.0.1');
console.log('yo, dawgs, now listening to port 3000');




