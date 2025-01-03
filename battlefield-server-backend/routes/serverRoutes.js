const express = require('express');
const router = express.Router();
const serverInfo = require('../data/serverInfo.json');

router.get('/server-info', (req, res) => {
  res.json(serverInfo);
});

module.exports = router;