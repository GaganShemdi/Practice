const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "Gagan@2004";
const app = express();

app.use(express.json());

const ALLUSERS = [
  {
    username: "gagansshemdi@gmail.com",
    password: "123",
    name: "Gagan Shemdi",
  },
  {
    username: "rohitsingh@gail.com",
    password: "1234",
    name: "Rohit Singh",
  },
  {
    username: "utkarshjai@gmail.com",
    password: "12345",
    name: "Utkarsh Bharadwaj",
  },
];

function userExists(username, password) {
  let userfound = false;
  for (let i = 0; i < ALLUSERS.length; i++) {
    if (
      ALLUSERS[i].username === username &&
      ALLUSERS[i].password === password
    ) {
      userfound = true;
    }
  }

  return userfound;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User does not exist",
    });
  }
  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users",function(req,res){
  const token = req.headers.authorization;
  try{
    const decoded = jwt.verify(token,jwtPassword);
    const username =decoded.username;
    for(let i=0;i<ALLUSERS.length;i++){
      if(ALLUSERS[i].username===username){
        return res.json({
          name:ALLUSERS[i].name
        })
      }
    }
  }
  catch(err){
      return res.status(403).json({
        msg:"There is an error"
      });
   
  }
});

app.listen(3000);
