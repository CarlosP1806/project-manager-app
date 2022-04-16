const router = require('express').Router();
const Project = require('../../models/Project');
const Task = require('../../models/Task');

// Create a new project
router.post('/', async (req, res) => {
  try {
    const newProject = await Project.create(req.body);
    if (!newProject) {
      res.status(500).json({ message: "error creating project " });
      return;
    }
    res.status(200).json(newProject);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

// Get a project by id
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.find({ _id: req.params.id });
    if (!project) {
      res.status(404).json({ message: "unable to find project" });
      return;
    }
    res.status(200).json(project);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

// Create a new task
router.post('/task', async (req, res) => {
  try {
    const newTask = await Task.create(req.body);
    if (!newTask) {
      res.status(500).json({ message: "error creating task " });
      return;
    }

    // Add task to corresponding project
    const correspondingProject = await Project.findOneAndUpdate(
      { _id: newTask.projectId },
      {$push: { "tasksId": newTask._id }});
    if (!correspondingProject) {
      res.status(500).json({ message: "invalid project id" });
    }
    res.status(200).json(newTask);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

module.exports = router;