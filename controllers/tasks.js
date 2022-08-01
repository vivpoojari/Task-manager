const Task = require('../models/tasks')

const getAllTasks = async (req,res) => {
    try{
        const tasks = await Task.find({})
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json(error)
    }
}

const createTask = async (req,res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json(task);   
    } catch (error) {
        res.status(500).json(error)
    }
}

const getTask = async (req,res) => {
    try{
        const taskID = req.params.id
        const task = await Task.findOne({_id:taskID})
        if(!task){
            return res.status(404).send(`No task with id ${taskID}`)
        }
        res.status(200).json({task});
    }
    catch(error) {
        res.status(500).json(error)
    }
}

const updateTask = async (req,res) => {
    try{
        const taskID = req.params.id
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {
            new: true,
            runValidators: true
        })
        if(!task){
            return res.status(404).send(`No task with id ${taskID}`)
        }
        res.status(200).json({task});
    }
    catch(error) {
        res.status(500).json(error)
    }
}

const deleteTask = async (req,res) => {
    try{
        const taskID = req.params.id
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(404).send(`No task with id ${taskID}`)
        }
        res.status(200).json({task});
    }
    catch(error) {
        res.status(500).json(error)
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}