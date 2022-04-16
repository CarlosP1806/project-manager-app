const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  tasks: {
    type: String,
    required: true
  }
});

const Project = model('Project', projectSchema);
module.exports = Project;