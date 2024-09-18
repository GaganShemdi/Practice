const express = require("express");
const app = express();

const users = [{
    name: "gagan",
    kidneys: [{
        healthy: false
    }]
}];

app.use(express.json());

app.get("/", function(req, res) {
    const johnkidney = users[0].kidneys;
    const numberofKidney = johnkidney.length;
    let healthykidney = 0; 
    for (let i = 0; i < johnkidney.length; i++) {
        if (johnkidney[i].healthy) {
            healthykidney += 1; 
        }
    }
    const unhealthykidney = numberofKidney - healthykidney;
    res.json({
        johnkidney,
        healthykidney,
        unhealthykidney
    });
});

app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy; 
    users[0].kidneys.push({
        healthy: isHealthy
    });
    res.json({
        msg: "Your Record Is Taken"
    });
});

app.put("/",function(req,res) {
    for(let i = 0 ; i<users[0].kidneys.length ; i++){
        users[0].kidneys[i].healthy = true

    }
    res.json({});
})

//remove unhealthy kideny

app.delete("/",function(req,res){
    const newKidney = []
    for(let i=0;i<users[0].kidneys.length;i++)
    {
        if(users[0].kidneys[i].healthy ) {
            newKidney.push({
                healthy : true
            })
        }
    }
    users[0].kidneys = newKidney;
    res.json({msg : "done"});
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
