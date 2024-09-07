const { Router } = require("express"); 
const logoutRouter = Router(); 

logoutRouter.get("/", (req, res, next) => {
    if (req.user) {
        req.logout((err) => {
            if (err) {
                return next(err);
            }
            res.redirect("/");
        });
    } else {
        next();
    }
});

module.exports = logoutRouter;