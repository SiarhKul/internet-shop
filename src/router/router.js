const express = require('express');

const router = express();

const db = require('../db/db');

router.get('/', (req, res, nex) => {
  res.render('index', {
    database: db,
  });
});

module.exports = router;
