const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    email: {
        type:String,
        unique:true,
        required: true,
    },
    username: {
        type:String,
        dunique:true,
        required:true,
    }, 
    password: {
        type:String,
        required: true,
    },
    list: [
        {
        type:mongoose.Types.ObjectId,
        ref: "List",
        //type bc it can take from list.js... alos ref and the name in list.js should be same
    },
    ],
});
module.exports = mongoose.model("User", userSchema);
