// backend/routes/index.js
const express = require('express');
const router = express.Router();
const apiRouter = require('./api'); // import from index.js file of api directory

//! Test Routes

router.get('/hello/world', function(req, res) {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  res.send('Hello World!');
});

// backend/routes/index.js
// ...
// Add a XSRF-TOKEN cookie
router.get("/api/csrf/restore", (req, res) => {
    const csrfToken = req.csrfToken();
    res.cookie("XSRF-TOKEN", csrfToken);
    res.status(200).json({
      'XSRF-Token': csrfToken
    });
  });
// ...

router.use('/api', apiRouter); // ALL routes for this entire project begin with "/api"

module.exports = router;
