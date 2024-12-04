const express = require("express");
const app = express();

app.get("/server", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const data = {
    name: "张三",
    age: 18,
    gender: "男",
  };
  res.send(JSON.stringify(data));
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

app.get("/delay", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    setTimeout(() => {
    res.send("延迟响应");
  }, 3000);
});
