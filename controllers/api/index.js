const router = require('express').Router();
const comments = require('./comments');
const post = require('./post');
const user = require('./user');


router.use('/comments', comments);
router.use('/post', post);
router.use('/user', user);
module.exports = router;
