const express = require("express");
const app = express();
const PORT = 3000;

// All users data Base

app.use(express.json());

const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: true,
      },
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];

app.get("/", function (req, res) {
  let all_John_Kidneys = users[0].kidneys;
  let total_John_Kidneys = all_John_Kidneys.length;

  let total_John_Healthy_Kidneys = 0;

  users[0].kidneys.forEach((ele) => {
    if (ele.healthy === true) {
      total_John_Healthy_Kidneys += 1;
    }
  });

  const total_John_UnHealthy_Kidneys =
    total_John_Kidneys - total_John_Healthy_Kidneys;
  res.json({
    name: users[0].name,
    kidneys: all_John_Kidneys,
    total_Kidneys: total_John_Kidneys,
    healthy_kidneys: total_John_Healthy_Kidneys,
    unhealthy: total_John_UnHealthy_Kidneys,
  });
});

// add healthy kidney
app.post("/add", (req, res) => {
  const isHealthy = req.body.isHealthy;

  // Validate input
  if (typeof isHealthy !== "boolean") {
    return res.status(400).json({
      message: "isHealthy must be a boolean value",
    });
  }

  users[0].kidneys.push({
    healthy: isHealthy,
  });

  const total_John_Kidneys = users[0].kidneys.length;

  res.status(200).json({
    message: "kidney added successfully",
    total_Kidneys: total_John_Kidneys,
  });
});

// do all kidneys healthy

app.put("/magic", (req, res) => {
  let unhealthycnt = users[0].kidneys.filter(ele => ele.healthy !== true).length
  if (unhealthycnt) {
    users[0].kidneys.map((ele) => {
      if (ele.healthy === false) {
        ele.healthy = true;
      }
    });

    res.status(200).send("All kidney are now healthy");
  } else {
    res.status(400).send("All kideneys are already healthy");
  }
});

// something to delete unhealthy kidneys from total kideneys

app.delete("/", function (req, res) {
  let unhealthycnt = users[0].kidneys.filter(ele => ele.healthy !== true).length
  if (unhealthycnt) {
    users[0].kidneys = users[0].kidneys.filter(
      (element) => element.healthy !== false
    );

    res.status(200).json({
      msg: "unhealthy kidney removed successfully",
      remaing: users[0].kidneys.length,
    });
  } else {
    res.status(411).send("All kideneys are already healthy");
  }
});

app.listen(PORT, function () {
  console.log(`This app is listening on port ${PORT}`);
});
