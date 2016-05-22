var express = require('express');
var router = express.Router();

/* GET anything under our path. */
router.get('*', function(req, res, next) {
  response.sendfile('./public/aurelia/index.html');
});

module.exports = router;
