const express = require("express");
const app = express();
const zod = require("zod");

 const schema = zod.object({
    email : zod.strict(),
    pass : zod.string(),
    kidneys : zod.array(zod.number),
    country : zod.literal("IN").or(zod.literal("US"))
 })
    //gagan schecme initialize hua hai 
app.use(express.json());




app.post("/health-checkup",function(req,res){
    const kidneys = req.body.kidneys;
    const email = req.query.email;
    const response = schema.safeParse(kidneys)
    const response2= schema.safeParse(email) //response check kiya hai
    res.send({
        msg:"You are fine "

    })
    });


    

app.listen(3000);
