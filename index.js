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
