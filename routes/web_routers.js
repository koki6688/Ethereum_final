const express = require('express');
const router = express.Router();

const Web3 = require('web3');

const web3 = new Web3('http://localhost:8545');

const carbonTokenABI = require('../contracts/CarbonToken.abi');

/* GET home page. */
router.get('/',async function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/users',async function (req, res, next) {
    res.render('index', { title: 'users' });
});

module.exports = router;