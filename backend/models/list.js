const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true,
    },
    body: {
        type:String,
        required: true,
    },
    user: [
        {
            type: mongoose.Types.ObjectId,
            ref: "User",
            //type bc it can take from user.js... alos ref and the name in user.js should be same

        },
    ],
},
{ timestamps: true }
);
module.exports = mongoose.model("List", listSchema);
