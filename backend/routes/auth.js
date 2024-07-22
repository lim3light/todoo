const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

// Register route
router.post("/register", async (req, res) => {
    try {
        const { email, username, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email: req.body.email });
        
        if (existingUser) {
            return res.status((200)).json({ message: "User already exists" });
        } else {

        // Hash the password with a salt
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        // Create a new user
        const user = new User({ email, username, password: hashPassword });
        await user.save().then(()=> res.status(200).json({message:"Sign Up Successful!!"}));
        res.status(200).json({ user });
        }

    
    } catch (error) {
        console.error(error);
        res.status(200).json({ message: "Internal Server Error.." });
    }
});

// Login route
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(200).json({ message: "Please Sign Up first" });
        }

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordCorrect) {
            return res.status(200).json({ message: "Password is not correct." });
        }

        const { password, ...others } = user._doc;
        res.status(200).json({ ...others });
    } catch (error) {
        console.error(error);
        res.status(200).json({ message: "Internal Server Error" });
    }
});

module.exports = router;



// const router = require("express").Router();
// const User = require("../models/user");
// const bcrypt = require("bcryptjs");
// //sing in 
// //post method bc we send data

// router.post("/register", async(req, res) => {
//     try {
//         const { email, username, password } = req.body;
//         // //crypt the password
//         const hashpassword = bcrypt.hashSync(password);
//         //new bc we are entering new data (data is stored in json form)
//         const user = new User({email, username, password:hashpassword});
//         await user.save().then(() => 
//             res.status(200).json({user: user})
//         );
//     }
//     catch (error){
//         res.status(400).json({message: "User already exists"});
//     }
// });


// // sing in 

// router.post("/register", async(req, res) => {
//     try {
//         const user = await User.findOne({email:req.body.email});
//         if (!user) {
//             res.status(400).json({message: "Please Sign Up first"});
//         }

//         const isPasswordCorrect = bcrypt.compareSync(
//             req.body.password,
//             user.password,
//         );
//         if (!isPasswordCorrect) {
//             res.status(400).json({ message: "Password is not correct."});
//         }
//         const { password, ...others } = user._doc;
//         res.status(200).json({ others});
//     }
//     catch (error){
//         res.status(400).json({message: "User already exists"});
//     }
// });





// module.exports = router;
// //this has to be exported to be used everywhere 
