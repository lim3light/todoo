const router = require("express").Router();
const User = require("../models/user");
const List = require("../models/list");

//addTask
router.post("/addTask", async (req, res) => {
    try {
        //check if user exists0
        const { title, body, id } = req.body;
        const existingUser = await User.findById(id);
        if (existingUser) {
            const list = new List({ title, body, user: existingUser });
            await list.save().then(() => res.status(200).json({list}));
            existingUser.list.push(list);
            existingUser.save();
        }
    } catch (error) {
        console.log(error);
        
    } 
});

//updateTask so we use put
//we need to fetch id to know what task to update
router.put("/updateTask/:id", async (req, res) => {
    try {
        const { title, body } = req.body;
        //check if user exists only to troubleshoot
        const list = await List.findByIdAndUpdate(req.params.id, { title, body });
        list.save().then(() => res.status(200).json({message: "Task updated"}));
    } catch (error) {
        console.log(error);
        
    } 
});


//deleteTask use delete
router.delete("/deleteTask/:id", async (req, res) => {
    try {
        //check if user exists0
        const { id } = req.body;
        //important to fetch obj id deleted to delete from user base as well
        const existingUser = await User.findByIdAndUpdate(id, 
            {$pull:{list:req.params.id}});
        if (existingUser) {
            const list = await List.findByIdAndDelete(req.params.id).then(() => res.status(200).json({message: "Task deleted"}));
        }
    } catch (error) {
        console.log(error);
        
    } 
});

//get tasks
//fetch all tasks from user [obj id] and take tasks from it
router.get("/getTasks/:id", async (req, res) => {
    const list = await List.find({user: req.params.id}).sort({createdAt: -1});
    if (list.length !==0) {
        res.status(200).json({list: list});
    } else {
        res.status(200).json({message: "No Tasks Available"});
    }
});

module.exports = router;