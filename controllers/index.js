const router = require('express').Router();

const apiRoutes = require('./api');
const home = require('./home');
const dashboard = require('./dashboard');

router.use('/', home);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboard);

module.exports = router;
