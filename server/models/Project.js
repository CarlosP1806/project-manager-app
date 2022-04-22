const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  tasks: [{
    type: Schema.Types.ObjectId,
    ref: 'Task'
  }],
  description: {
    type: String,
    required: true
  },
  ownerId: {
    type: String,
    required: true
  }
});

const Project = model('Project', projectSchema);
module.exports = Project;