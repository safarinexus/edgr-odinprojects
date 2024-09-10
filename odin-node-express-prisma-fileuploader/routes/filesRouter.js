const { Router } = require("express"); 
const filesRouter = Router(); 
const path = require("node:path");
const db = require("../controllers/prismaController"); 
const multer = require("multer");
const fs = require("fs");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });
filesRouter.get("/", async (req, res, next) => {
    if (req.user) {
        const files = await db.getFiles(req.user.email);
        res.render("files.ejs", { title: "Odin File Uploader", user: req.user, files: files });
    } else {
        next();
    }
})

filesRouter.post("/upload", upload.array('files'), async (req, res) => {
    const files = req.files;
    for (const file of files) {
        const filepath = `/${file.filename}`;
        const name = file.originalname;
        const size = String(Math.floor(file.size/1024)) + "KB";
        const type = file.mimetype;
        const date = new Date().toLocaleString();
        const email = req.user.email;
        try { 
            await db.addFile(filepath, name, date, size, type, email);
        } catch (err) {
            console.log(err);
        }
    }
    res.redirect("/");
});

filesRouter.get("/delete/:id", async (req, res, next) => {
    if (req.user) {
        const id = Number(req.params.id);
        const email = req.user.email;
        const file = await db.getFile(id);
        if (file.owner_email !== email) {
            next(); 
        } else {
            const filepath = path.resolve(__dirname + "/.." + "/public" + file.path);
            await db.deleteFile(id, email); 
            fs.unlink(filepath, (err) => {
                if (err) {
                    if (err.code === 'ENOENT') {
                    console.error('File does not exist.');
                    } else {
                        throw err;
                    }
                } else {
                    console.log('File deleted!');
                }
            });
            res.redirect("/");
        }
    } else {
        next(); 
    }
});

module.exports = filesRouter;