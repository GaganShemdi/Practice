const express = require("express");
const app = express();

function usermiddleware(req,res,next) {
    const username = req.query.username;
    const password = req.query.password;

    if(username !="gagan" || password != "pass"){
        res.status(403).json({
            msg:"Username or pass is invalid "
        });
    }
    else {
        next();
    }
}


function kidneymiddleware(req,res,next){
    const kidneyId = req.query.kidneyId;

    if(kidneyId != 1 && kidneyId !=2) {
        res.status(403).json({
            msg : "Enter valid kidney numbers "
        });
    }
    else {
        next();
    }
}

app.get("/health-checkup",usermiddleware,kidneymiddleware,function(req,res){
    res.json({
        msg:"You are fine "
    })
});

app.get("/kidney-checkup",usermiddleware,kidneymiddleware,function(req,res){
    res.json({
        msg:"Your kidneys are fine "
    })
});
    

app.listen(3000);