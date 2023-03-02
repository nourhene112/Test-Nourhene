const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require('cors')

const app = express();

// pour formater les données post en format json
app.use(express.json());

app.use(cors());

// connection vers mongoDB Atlas (service cloud)
mongoose
  .connect(
"    mongodb+srv://nourhenesaidi44:<nourhene21695528.>@cluster0.6lleyme.mongodb.net/?retryWrites=true&w=majority"  )
.then(() => {
    console.log("Database connected !!!");
  })
  .catch(() => {
    console.log("Problème de connection !");
  });
  
app.get("/posts", (req, res) => {
  const Post = mongoose.model("Post", { name: String, status: String });
  Post.find().then((posts) => {
   console.log(posts);
    res.status(200).json(posts)
  });
});
  app.listen(3000, () => {
    console.log("server is running on port 3000...")
  });