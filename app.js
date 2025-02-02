const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const fileUpload = require("express-fileupload");
const pageRoute = require("./routes/pageRoute");

mongoose.connect("mongodb://127.0.0.1:27017/freelance");

const app = express();

app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

app.use("/", pageRoute);

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} başlatıldı`);
});
