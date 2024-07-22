const mongoose = require("mongoose");
//async function becasue it has to wait
const conn = async (req,res) => {
    try {
        console.log("im here");
        await mongoose.connect("mongodb+srv://admin:V16llXeqhD1xge6b@todoodata.twiu29e.mongodb.net/").then(()=>{
            console.log("Database connected...");
        })
    } catch (error) {
        res.status(400).json({message: "Not connected"});
    }
};
conn();


