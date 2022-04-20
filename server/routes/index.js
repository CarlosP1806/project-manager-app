const router = require('express').Router();
const path = require('path');

const projectRoutes = require('./project_routes/project_routes');
const userRoutes = require('./user_routes/user_routes');

router.use('/project', projectRoutes);
router.use('/user', userRoutes);

// Serve react front-end in production
router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = router;