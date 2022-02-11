const app = require("./app");

// server config
app.use(
  express.static(path.join(__dirname, "/frontend/build"))
);

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "/frontend/build", "index.html")
  );
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});