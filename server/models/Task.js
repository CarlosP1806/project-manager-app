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
  createdAt: {
    type: Date,
    required: true,
    default: Date.now()
  },
  dueDays: {
    type: Number,
    required: true 
  },
  description: {
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
    type: String
  }],
  comments: [{
    commentId: String,
    author: String,
    content: String
  }]
});

const Task = model('Task', taskSchema);
module.exports = Task;