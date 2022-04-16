const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
  projectId: {
    type: Schema.Types.ObjectId,
    ref: "Project",
    required: true
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  labels: [{
    type: String,
    default: null
  }]
});

const Task = model('Task', taskSchema);
module.exports = Task;