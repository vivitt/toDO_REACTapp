const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
    content: {type: String},
    category: String,
    emoji: String,
    completed: {type: Boolean, default: false
    }
   });


module.exports = new mongoose.model("Task", taskSchema);



