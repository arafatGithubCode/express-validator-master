const app = require("./app");

const PORT = 3000;

//home route
app.get("/", (req, res) => {
  res.status(200).send("<h1>express validator finishing</h1>");
});

//route not found error
app.use((req, res, next) => {
  res.status(400).send({ message: "Requested route is not found" });
});

//route not found error
app.use((err, req, res, next) => {
  res.status(500).json({ message: "something broke" });
});

app.listen(PORT, () => {
  console.log(`app is running at http://localhost:${PORT}`);
});
