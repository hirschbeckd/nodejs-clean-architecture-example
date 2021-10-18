import {WhatRoute} from "./framework/express-route/what-route";
import {UsersRoute} from "./framework/express-route/users-route";
import {setUpRouting} from "./framework/express-route/express-route-mapper";
import {createMongoDBConnection} from "./framework/database/database-initializer";

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

createMongoDBConnection.onConnect(() => {
    setUpRouting(app, new WhatRoute());
    setUpRouting(app, new UsersRoute());
});

module.exports = app;
