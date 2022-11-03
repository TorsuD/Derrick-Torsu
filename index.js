const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.json()); // middleware to convert our string to JSON.

app.listen(PORT, async () =>
  console.log(`it's alive on http://localhost:${PORT}/`)
);

// the array of the National Service Personnel
const NSP = {
  Ivan: {
    fullname: "Ivan Sasu",
    age: 24,
    dob: "20 May 1998",
    complexion: "Chocolate",
    marital_status: "Single",
  },

  Karen: {
    occupation: "Software Engineer",
    gender: "Female",
    marital_status: "Single",
    complexion: "Chocolate",
  },
  Dennis: { height: 1.9, weight: 82 },
};
// initial route
app.get("/", (req, res) => {
  res.json(NSP);
});

app.get("/GetNSPData", (req, res) => {
  res.json(NSP);
});

app.get("/GetNSPData/Ivan", (req, res) => {
  res.json(NSP.Ivan);
});

app.get("/GetNSPData/Karen", (req, res) => {
  res.json(NSP.Karen);
});

app.get("/GetNSPData/Dennis", (req, res) => {
  res.json(NSP.Dennis);
});

app.get("/GetNSPData/:name", (req, res) => {
  //   let i = req.params.name;
  const entries = Object.entries(NSP);
  const values = Object.values(entries);

  //   res.json(values[i][1]);
  //   res.json("Hello there");
  //   if (res.params.name ===  ) {
  res.json(values[0]);
  console.log(values[2][0]);
  //   console.log(values[[0]]);
  //   }

  if (values[i][0].includes(req.params.name) === req.params.name && true) {
    res.json("True");
    console.log(True);
  }

  console.log(NSP.Ivan);

  //   const arr = ["Ivan", "Derrick"];
  //   const truth = arr.includes("Ivans");
  //   console.log(truth);
});
