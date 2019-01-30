const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/',async function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/login',async function(req, res, next) {
    res.render('login', { title: 'login' });
});


router.get('/users',async function (req, res, next) {
    res.render('index', { title: 'test7' });
});

module.exports = router;