// home.js
// Copyright (C) 2019 Gab AI, Inc.
// License: MIT

'use strict';

const express = require('express');
const router = express.Router();

const request = require('request-promise-native');

module.exports = (app) => {
  app.use('/', router);
};

router.get('/', (req, res, next) => {
  var viewModel = { };
  request('https://gabnews.com/top-news?fmt=json')
  .then((response) => {
    viewModel.news = JSON.parse(response);
    res.render('index', viewModel);
  })
  .catch(next);
});
