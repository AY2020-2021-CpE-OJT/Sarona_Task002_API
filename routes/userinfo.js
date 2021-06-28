const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('This is a userinfo page to get your info!');
});
//display
router.get('/display', (req, res) => {
    res.send('This is a userinfo page to get your info!');
});

module.exports = router;