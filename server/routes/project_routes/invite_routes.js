const router = require('express').Router();
const { authMiddleware } = require('../../utils/auth');
const Project = require('../../models/Project');
const User = require('../../models/User');
const Task = require('../../models/Task');

// Invite a member to project
router.put('/', authMiddleware, async (req, res) => {
  try {
    const newInvitation = {
      issuedBy: req.user._id,
      projectId: req.body.projectId,
      taskId: (Math.random() + 1).toString(36).substring(7)
    }
    const invitedUser = await User.findOneAndUpdate(
      { username: req.body.username},
      { $push: { "invitations": newInvitation }}
    )
    if(!invitedUser) {
      res.status(404).json({ message: "cannot find user"});
      return;
    }

    res.status(200).json(invitedUser);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;