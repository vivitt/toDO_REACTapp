const taskModel = require("../models/taskModel")
var express = require('express')
var app = express()

//task creator 
class TaskCreator {
    constructor (id="", content="This is a task", category="-", status="to do", emoji){
        this.id = id;
        this.content = content;
        this.category = category;
        this.status = status;
        this.emoji = emoji;
    }
}

//Get all tasks ////////////////////////////////////////////
async function getAllTheTasks (req, res) {
    try {
        const allTheTasks = await taskModel.find();
        console.log(allTheTasks)
        res.status(200).json({
        success: true, 
        tasks: allTheTasks}) 
        }
        catch (err) {
        console.log(err)
        }
}
//////////////////////////////////////////////////////////////////////


//create new  //////////////////////////////////////////////////////////

async function createNewTask (req, res) {
    try {
        const newTask = await taskModel.create({
        content: req.body.task,
        category: req.body.selectcategory,
        
        });
        res.status(200).json({
            success: true,
            task: newTask
        });
    } catch (err) {
        res.status(400).json({
            success: false, 
            message: err.message
        });
        
    }
    
}
    
//DElete all the tasks
async   function emptyList (req, res) {
        
        User.updateOne({_id: userID}, {$unset: { tasks: []}})
        .then(()=>{
            res.redirect('/users');
        })
        .catch((err) => {
            console.log(err);
        })   
    }




function removeOneTask(req, res) {
    let id = req.body.check;
    taskModel.deleteOne( {_id: id}, function(error){
        if (error) console.error;
        res.status(200).json({
            success: true,
            message: `Task with id ${completedTask} was deleted`
    })

})

} 





///////cat object //****************************************** */

const categories = {
    category: "",
    home: '\u{1F3E0}',
    important: '\u{2757}',
    grocery: '\u{1F34E}',
    care: '\u{1F493}',
    pet: '\u{1F436}', 
    work: '\u{1F6A7}',
    birthday: '\u{1F389}',
    healt: '\u{1F49A}',
    urgent: '\u{1F4A5}',
    pinned: '\u{1F4CC}',
    others: '\u{1F47E}'

}


const categoriesArr = Object.keys(categories);

function addEmo(obj, category) {
    return obj[category];
   
}

//////////////////////////////////************************ */


module.exports = {getAllTheTasks, createNewTask, emptyList, removeOneTask}