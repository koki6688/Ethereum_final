const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/',async function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/users',async function (req, res, next) {
    res.render('index', { title: 'test' });
});

module.exports = router;