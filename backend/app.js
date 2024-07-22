const express = require("express");
const app = express();

const cors = require("cors");
const port = 3000
require("./conn/conn");

//api call
const auth = require("./routes/auth");
app.use(express.json());

const list = require("./routes/list");


app.use(cors());
// homepage is"/"
app.get("/", (req,res)=>{
    res.send("Hello!!!");
});

//auth api
app.use("/api/v1", auth);
//list api 
app.use("/api/v2", list);



app.listen(port, () => {
    console.log("server started...");
});