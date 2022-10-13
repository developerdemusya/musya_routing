const express = require("express")
const passport =require("passport")
const port =process.env.PORT || 5000

const app=express()
app.get("/", (req,res)=>{
    res.send('welkam to express')
})


app.listen(port,console.log("server is running"))