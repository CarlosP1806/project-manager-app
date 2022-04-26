const router = require('express').Router();
const path = require('path');

const projectRoutes = require('./project_routes');
const userRoutes = require('./user_routes');
const inviteRoutes = require('./invite_routes');

router.use('/projects', projectRoutes);
router.use('/users', userRoutes);
router.use('/invitations', inviteRoutes);

// Serve react front-end in production
router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = router;