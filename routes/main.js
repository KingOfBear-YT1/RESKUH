__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/docs', (req, res) => {
    res.sendFile(__path + '/views/docs.html')
})
router.get('/', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})
router.get('/about', (req, res) => {
    res.sendFile(__path + '/views/about.html')
})
router.get('/google-verification', (req, res) => {
    res.sendFile(__path + '/views/google-verification.html')
})
router.get('/googlefe81226529bfcd5a', (req, res) => {
    res.sendFile(__path + '/views/googlefe81226529bfcd5a.html')
})
router.get('index.html', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})
router.get('/search.html', (req, res) => {
    res.sendFile(__path + '/views/search.html')
})
router.get('/blog', (req, res) => {
    res.sendFile(__path + '/views/blog.html')
})

module.exports = router
