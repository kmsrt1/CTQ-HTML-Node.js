var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
  var _url = request.url; 
  var queryData = url.parse(_url, true).query;
  var pathName = url.parse(_url, true).pathname;

 

  if(pathName === '/'){
      fs.readFile(`data/${queryData.id}.txt`, 'utf8', function(err, fileContents){
       fs.readdir('./data', function(error, filelist){
    /*
    var list = `  
    <ul>
     <li><a href="/?id=HTML">HTML</a></li>
     <li><a href="/?id=CSS">CSS</a></li>
     <li><a href="/?id=JavaScript">JavaScript</a></li>
    </ul>`
    */
   var i = 0;
   var list = '<ul>';
   while(i < filelist.length){
    filelist = `<li><a herf=/?id=${filelist[i]}>${filelist[i]}</a></li>`;
    i++;
   }
   list = list + '</ul>';
   var title = queryData.id;
   var template = `
      <!DOCTYPE html>
    <html>
    <head>
      <title>WEB1 - ${title}</title> 
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/?id=Welcome">WEB</a></h1>
      ${list}
      <h2>${title}</h2>
      <p>
      ${fileContents}
      </p>
    </body>
    </html>`;
    response.writeHead(200);
    response.end(template);
  })
})
  } else {
    response.writeHead(404);
    response.end('Not found');
  }
});
app.listen(3000);  
//query string : ?~~~
//var http = require('http');
/*
원래 코드는 이렇습니다. 작동이 안되길레 바꿨습니다.
var fs = require('fs');
var url = require('url');
 
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){
      if(queryData.id === undefined){
        fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
          var title = 'Welcome';
          var description = 'Hello, Node.js';
          var template = `
          <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            <ul>
              <li><a href="/?id=HTML">HTML</a></li>
              <li><a href="/?id=CSS">CSS</a></li>
              <li><a href="/?id=JavaScript">JavaScript</a></li>
            </ul>
            <h2>${title}</h2>
            <p>${description}</p>
          </body>
          </html>
          `;
          response.writeHead(200);
          response.end(template);
        });
      } else {
        fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
          var title = queryData.id;
          var template = `
          <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            <ul>
              <li><a href="/?id=HTML">HTML</a></li>
              <li><a href="/?id=CSS">CSS</a></li>
              <li><a href="/?id=JavaScript">JavaScript</a></li>
            </ul>
            <h2>${title}</h2>
            <p>${description}</p>
          </body>
          </html>
          `;
          response.writeHead(200);
          response.end(template);
        });
      }
    } else {
      response.writeHead(404);
      response.end('Not found');
    }
});
app.listen(3000);*/