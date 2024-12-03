// ID: 001306469

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Please enter the name of the task',
  },
  Created_date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed'],
    }],
    default: ['pending']
  }
});

module.exports = model('Tasks', TaskSchema);
