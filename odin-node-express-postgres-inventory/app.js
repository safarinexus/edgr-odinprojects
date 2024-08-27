require('dotenv').config()
const express = require('express');
const app = express();
const path = require("node:path");
const port = process.env.PORT || 3000
const indexRouter = require("./routes/indexRouter"); 
const gamesRouter = require("./routes/gamesRouter"); 
const addRouter = require("./routes/addRouter");
const catsRouter = require("./routes/categoriesRouter");

app.set("views", path.join(__dirname, "views")); 
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter); 
app.use("/games", gamesRouter);
app.use("/categories", catsRouter);
app.use("/add", addRouter);
app.get("*", (req, res) => {
    res.render("error");
})



app.listen(port, () => console.log(`Server initiated. Listening on Port ${port}`));