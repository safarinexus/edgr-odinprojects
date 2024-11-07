const { Router } = require("express"); 
const filesRouter = Router(); 
const db = require("../controllers/prismaController"); 
const multer = require("multer");
const sb = require("../supabase/client")
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

/* this is for dev environment and local storage, we are using supabase
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
*/

filesRouter.get("/", async (req, res, next) => {
    if (req.user) {
        const files = await db.getFiles(req.user.email);
        res.render("files.ejs", { title: "Odin File Uploader", user: req.user, files: files });
    } else {
        next();
    }
})

filesRouter.get("/download/:id", upload.none(), async (req, res) => {
    if (req.user) {
        const id = Number(req.params.id);
        const email = req.user.email;
        const file = await db.getFile(id, email);
        if (file === null || file.owner_email !== email) {
            next(); 
        } else {
            const path = file.path;
            const downloadUrl = await sb.getDownloadLink(path); 
            if (downloadUrl !== null) {
                const response = await fetch(downloadUrl);
                const blob = await response.blob();
                try {
                    res.setHeader('Content-Disposition', `attachment; filename=${file.file_name}`);
                    res.setHeader('Content-Type', response.headers.get('content-type'));
                    res.send(blob);
                } catch (error) {
                    console.error('Error fetching signed URL:', error);
                    res.status(500).send('Error downloading file');
                }
            } else {
                res.redirect("/");
            }
        }
    } else {
        res.redirect("/");
    }
});

filesRouter.post("/upload", upload.array('files'), async (req, res) => {
    const files = req.files;
    for (const file of files) {
        const name = file.originalname;
        const size = String(Math.floor(file.size/1024)) + "KB";
        const type = file.mimetype;
        const date = new Date().toLocaleString();
        const email = req.user.email;
        const sbResponse = await sb.uploadFile(file, email);
        if (sbResponse !== null) {
            await db.addFile(sbResponse, name, date, size, type, email);
        }
    }
    res.redirect("/");
});

filesRouter.get("/delete/:id", async (req, res, next) => {
    if (req.user) {
        const id = Number(req.params.id);
        const email = req.user.email;
        const file = await db.getFile(id, email);
        if (file === null || file.owner_email !== email) {
            next(); 
        } else {
            const response = await sb.deleteFile(file.path);
            if (response) {
                await db.deleteFile(id);
            }   
            res.redirect("/");
        }
    } else {
        next(); 
    }
});

module.exports = filesRouter;