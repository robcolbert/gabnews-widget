// gabnews-widget.js
// Copyright (C) 2019 Gab AI, Inc.
// License: MIT

'use strict';

const express = require('express');
const config = require('./config/config');;

const app = express();

module.exports = require('./config/express')(app, config);

app.listen(config.port, () => {
  console.log('Express server listening on port ' + config.port);
});