const express = require("express");
const app = express();

function OldEnoughMiddleWare(req, res, next) {
  const age = req.query.age;
  if (age >= 18) next();
  else res.send("You are not old enough");
}

//app.use(OldEnoughMiddleWare) can also be used to check and exexte anythign bellow
app.get("/ride1",OldEnoughMiddleWare, function (req, res) {
  res.json({
    msg: "You have riden the first ride 1",
  });
});

app.get("/ride2",OldEnoughMiddleWare, function (req, res) {
  res.json({
    msg: "You have riden the first ride 2",
  });
});

app.listen(3000);
