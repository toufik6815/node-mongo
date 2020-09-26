const express = require("express");

const app = express();



app.get("/", (req, res) =>{
    res.send("My name is Toufik Hasan");
});



app.listen(9284, () => console.log("Listening to port 9284"));














// function rootCall(req, res){
//     res.send('Thank you very much')
// }
// app.get("/", rootCall);


// const rootCall = (req, res) => res.send("Thank you very much");
// app.get("/", rootCall);