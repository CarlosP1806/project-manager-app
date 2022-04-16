const router = require('express').Router();
const path = require('path');

const projectRoutes = require('./project_routes/project_routes');

router.use('/project', projectRoutes);

// Serve react front-end in production
router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = router;