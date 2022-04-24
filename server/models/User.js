const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  projects: [{
    type: Schema.Types.ObjectId,
    ref: "Project"
  }],
  invitations: [{
    invitationId: String,
    issuedBy: String,
    projectId: String
  }]
});

const User = model('User', userSchema);
module.exports = User;