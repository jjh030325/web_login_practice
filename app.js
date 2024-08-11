require("dotenv").config();
const express = require("express");
const connectDb = require("./config/db");
const methodOverride = require("method-override");

const app = express();
const port = process.env.PORT || 3000;

connectDb();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(methodOverride("_method"));

app.use("/", require("./routes/main"));

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});