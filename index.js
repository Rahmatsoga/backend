import express from "express"
import mongoose from "mongoose"
import User from "./Schema.js";
const App = express ();
const DURL="mongodb://localhost:27017/backend-practice"
mongoose.connect(DURL)
.then(()=> console.log("Connected to database "))
.catch(()=> console.log("Coneection failed"));
 
App.get("/", (req,res)=> res.send("Backend working"));

App.post("/user", async(req,res)=> {

    try{
        const data=await User.create({
            name:"SA",
            age:45,
            alive:true,
        });
        res.send(data);
    } 
    catch(err){
        res.send(err)
    }
})

// App.get("user", async (req,res)=>{
//     const data=await User.find({})

//     res.send(data)
// });
// App.get("/user", async (req,res)=>{
//     const data=await User.findById("66d563b282f790c099a1c8fa")

//     res.send(data);
// });

// App.patch("/user",async (req,res)=>{
//     const updatedUser=await User.findByIdAndUpdate("66d563b282f790c099a1c8fa", {
//         name:"SH",
//         age:50,
//     })
//     res.send(updatedUser)
// })

//  App.delete("/user",async (req,res)=>{
//     const deleted =await User.findByIdAndDelete("66d563b282f790c099a1c8fa")
//     // res.send("Deleted")
//     res.send(deleted);
// })
const PORT=5000;
App.listen(5000, ()=>console.log(`Listening on port ${PORT}`))