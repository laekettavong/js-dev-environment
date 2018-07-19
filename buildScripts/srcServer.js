// var express = require('express');
// var path = require('path');
// var open = require('open');

import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev'

// var app = express();
// var port = 3000;

const app = express();
const port = 3000;
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  pubicPath: config.output.publicPath
}));

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '../src/index.html'))
});

app.get('/users', (request, response) => {
  response.json([
    {id: 1, firstName: "Lae", lastName: "Kettavong", email: "lae@email.com"},
    {id: 2, firstName: "Sara", lastName: "Jefferson", email: "sara@email.com"},
    {id: 3, firstName: "Michael", lastName: "Miller", email: "mike@email.com"}
  ]);
});



app.listen(port, error => {
  if(error){
    console.log(error); // eslint-disable-line no-console
  }else{
    open(`http://localhost:${port}`);
  }
})
