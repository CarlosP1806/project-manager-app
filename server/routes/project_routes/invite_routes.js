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
      invitationId: (Math.random() + 1).toString(36).substring(7)
    }
    const invitedUser = await User.findOneAndUpdate(
      { username: req.body.username },
      { $push: { "invitations": newInvitation } }
    )
    if (!invitedUser) {
      res.status(404).json({ message: "cannot find user" });
      return;
    }

    res.status(200).json(invitedUser);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.put('/accept', authMiddleware, async (req, res) => {
  try {
    // Add project to user's project and remove invitation
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.user._id },
      {
        $push: { "projects": req.body.projectId },
        $pull: { "invitations": { invitationId: req.body.invitationId } }
      }
    );
    if (!updatedUser) {
      res.status(404).json({ message: "cannot update user" });
      return;
    }

    // Add user to project members
    const updatedProject = await Project.findOneAndUpdate(
      { _id: req.body.projectId },
      { $push: { "members": req.user._id } }
    );
    if (!updatedProject) {
      res.status(404).json({ message: "cannot update project " });
      return;
    }

    res.json({ updatedUser, updatedProject });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.put('/decline', authMiddleware, async (req, res) => {
  try {
    // Remove invitation 
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.user._id },
      { $pull: { "invitations": { invitationId: req.body.invitationId } } }
    );
    if (!updatedUser) {
      res.status(404).json({ message: "cannot update user" });
      return;
    }

    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.put('/remove-member', authMiddleware, async (req, res) => {
  // TODO: Validate if current user is project owner
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.body.userId },
      { $pull: { "projects": req.body.projectId } }
    );
    if (!updatedUser) {
      res.status(404).json({ message: "cannot update user" });
      return;
    }

    const updatedProject = await Project.findOneAndUpdate(
      { _id: req.body.projectId },
      { $pull: { "members": req.body.userId } }
    );
    if (!updatedProject) {
      res.status(404).json({ message: "cannot update project" });
      return;
    }

    res.status(200).json({ updatedUser, updatedProject });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;