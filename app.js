const express=require("express")
const app=express()
const path=require("path")
const dotenv=require("dotenv")
dotenv.config({ path : "./.env"})
app.get("/" , (req,res)=>{
    res.send("hello satyam ")
})

app.listen(process.env.PORT , (err)=>{
    if(err) throw err;
    console.log("listen")
})