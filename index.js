const express = require('express');
const app = express()

app.get('/', (req,res) =>{
    res.send({"message" : "Hello from Docker!"})
})

// Get
app.get("/allstudents", (req, res) => {
    res.send("Get all student");
});



app.listen(8080, () =>{
    console.log("Server is running")
})