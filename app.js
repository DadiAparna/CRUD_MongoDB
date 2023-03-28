const express = require("express");
const app = express();
const postRoutes = require("./routes/postRoutes");

require("./database/connection");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/", postRoutes);

app.listen(5000, () => {
  console.log("running on port 5000");
  
});