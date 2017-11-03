const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({"status": "success"});
})

router.all('*', (req, res) => {
    res.send({"status": "default"})
})
module.exports = router;