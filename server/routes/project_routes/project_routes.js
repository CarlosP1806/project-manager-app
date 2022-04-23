const router = require('express').Router();
const { authMiddleware } = require('../../utils/auth');
const Project = require('../../models/Project');
const User = require('../../models/User');
const Task = require('../../models/Task');

// Create a new project
router.post('/', authMiddleware, async (req, res) => {
  try {
    const ownerId = req.user._id;
    const projectData = {
      ownerId,
      title: req.body.title,
      description: req.body.description,
      membersIds: [ownerId]
    };

    const newProject = await Project.create(projectData);
    if (!newProject) {
      res.status(500).json({ message: "error creating project" });
      return;
    }

    // Add project to user's list
    const owner = await User.findOneAndUpdate(
      { _id: ownerId },
      { $push: { "projects": newProject._id } }
    );
    if (!owner) {
      res.status(404).json({ message: "cannot find user" });
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
    const project = await Project.findOne({ _id: req.params.id }).populate('tasks');
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
      { $push: { "tasks": newTask._id } });
    if (!correspondingProject) {
      res.status(500).json({ message: "invalid project id" });
      return;
    }
    res.status(200).json(newTask);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

// Update task with given id
router.put('/task', async (req, res) => {
  try {
    const updatedTask = await Task.findOneAndUpdate(
      { _id: req.body._id },
      req.body
    );
    if (!updatedTask) {
      res.status(404).json({ message: "cannot find task" });
      return;
    }
    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

// Get task with given id
router.get('/task/:id', async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id });
    if (!task) {
      res.status(404).json({ message: "cannot find task" });
      return;
    }
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ message: err });
  }
})

// Delete task with given id
router.delete('/task/:id', async (req, res) => {
  try {
    const deletedTask = await Task.findOneAndDelete({ _id: req.params.id });
    if (!deletedTask) {
      res.status(404).json({ message: "no task found" });
      return;
    }
    // Remove task from corresponding project
    const correspondingProject = await Project.findOneAndUpdate(
      { _id: deletedTask.projectId },
      { $pull: { "tasks": deletedTask._id } }
    );
    if (!correspondingProject) {
      res.status(500).json({ message: "invalid project id" });
      return;
    }
    res.status(200).json(deletedTask);

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

module.exports = router;