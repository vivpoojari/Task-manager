const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, 'must provide name'],
        trim:true,
        maxlength: [20, "name can't be more than 20 characters"]
    }, completed: {
        type: Boolean,
        default:true
    }
})

module.exports = mongoose.model('Task', TaskSchema)