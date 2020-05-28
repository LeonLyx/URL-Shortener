// load environment variable
require('dotenv').config()


var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var HttpMethod = require('./lib/http_method');
var routerList = require('./routes/router_manager');

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// register all endpoints
routerList.forEach((router) =>{
    router.routes.forEach((route) =>{
        HttpMethod[route.method](router.router, route.path, route.handler)
    });
    app.use(router.prefix, router.router);
})

module.exports = app;
