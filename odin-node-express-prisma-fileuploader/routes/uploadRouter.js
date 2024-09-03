const { Router } = require("express");
const uploadRouter = Router(); 

uploadRouter.get("/", (req, res, next) => {
    if (req.user) { 
        res.render("upload", { title: "Upload your file", user: req.user });
    } else { 
        res.render("error", { title: "Uh oh!", error: "404: Resource not found!", user: req.user });
    }
});

module.exports = uploadRouter