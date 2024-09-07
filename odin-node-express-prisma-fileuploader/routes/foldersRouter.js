const { Router } = require("express"); 
const foldersRouter = Router(); 
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

foldersRouter.get("/", async (req, res, next) => {
    if (req.user) {
        const files = await db.getFiles(req.user.email, null);
        const subFolders = await db.getFolders(req.user.email);
        res.render("folders", { title: "Odin File Uploader", user: req.user, files: files, folders: subFolders, currFolder: null });
    } else {
        next(); 
    }
}); 

foldersRouter.get("/:folderid", async (req, res, next) => {
    if (req.user) {  
        const id = Number(req.params.folderid);
        const folderInQuestion = await db.getFolder(id); 
        if (folderInQuestion === null || folderInQuestion.owner_email !== req.user.email) {
            next(); 
        } else {
            const subFolders = await db.getFolders(req.user.email, id);
            const files = await db.getFiles(req.user.email, id);
            res.render("folders", { title: "Odin File Uploader", user: req.user, files: files, folders: subFolders, currFolder: folderInQuestion });
        }
    } else {
        next();
    }
});

foldersRouter.post("/add", async (req, res) => {
    const foldername = req.body.foldername; 
    await db.createFolder(foldername, req.user.email);
    res.redirect("/folders");
})

foldersRouter.post("/:folderid/add", async (req, res) => {
    const foldername = req.body.foldername; 
    const parentId = Number(req.params.folderid);
    await db.createFolder(foldername, req.user.email, parentId);
    res.redirect(path.normalize(req.originalUrl + "/.."));
});

foldersRouter.post("/upload", upload.array('files'), async (req, res) => {
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
    res.redirect("/folders");
});

foldersRouter.post("/upload/:folderid", upload.array('files'), async (req, res) => {
    const containingId = Number(req.params.folderid);
    const files = req.files;
    for (const file of files) {
        const filepath = `/${file.filename}`;
        const name = file.originalname;
        const size = String(Math.floor(file.size/1024)) + "KB";
        const type = file.mimetype;
        const date = new Date().toLocaleString();
        const email = req.user.email;
        try { 
            await db.addFile(filepath, name, date, size, type, email, containingId);
        } catch (err) {
            console.log(err);
        }
    }
    res.redirect(path.normalize(req.originalUrl + "/../../" + containingId));
}); 

foldersRouter.get("/update/:folderid", async (req, res, next) => {
    if (req.user) {  
        const id = Number(req.params.folderid);
        const folderInQuestion = await db.getFolder(id);
        if (folderInQuestion === null || folderInQuestion.owner_email !== req.user.email) {
            next(); 
        } else {
            let pathBack = "";
            if (folderInQuestion.parent_id === null) {
                pathBack = "/folders";
            } else {
                pathBack = "/folders/" + folderInQuestion.parent_id;
            }
            res.render("update", { title: "Change folder name!", user: req.user, targetFolder: folderInQuestion, pathBack: pathBack });
        }
    } else {
        next();
    } 
});

foldersRouter.post("/update/:folderid", async (req, res) => {
    const newName = req.body.newname; 
    const id = Number(req.params.folderid);
    const pathBack = req.body.pathBack;
    await db.updateFolder(id, newName);
    res.redirect(pathBack); 
})


foldersRouter.get("/deletefolder/:folderid", async (req, res, next) => {
    if (req.user) {  
        const id = Number(req.params.folderid);
        const folderInQuestion = await db.getFolder(id);
        if (folderInQuestion === null || folderInQuestion.owner_email !== req.user.email) {
            next(); 
        } else {
            let pathBack = "";
            if (folderInQuestion.parent_id === null) {
                pathBack = "/folders";
            } else {
                pathBack = "/folders/" + folderInQuestion.parent_id;
            }
            res.render("deleteFolder", { title: "Change folder name!", user: req.user, targetFolder: folderInQuestion, pathBack: pathBack });
        }
    } else {
        next();
    } 
});

foldersRouter.post("/deletefolder/:folderid", async(req, res) => {
    // fml this has to be a recursive function
    const id = Number(req.params.folderid);
    const folderInQuestion = await db.getFolder(id);
    const confirmation = req.body.confirmation;
    const pathBack = req.body.pathBack;
    if (confirmation === folderInQuestion.folder_name) {
        
    }
    res.redirect(pathBack); 
});

foldersRouter.get("/deletefile/(:folderid/)?:id", async (req, res, next) => {
    if (req.user) {
        const fileId = Number(req.params.id);
        const folderId = Number(req.params.folderid);
        console.log(folderId);
        const email = req.user.email;
        let pathBack = "";
        if (isNaN(folderId)) {
            pathBack = "/folders";
        } else {
            pathBack = "/folders/" + folderId;
        }
        const fileInQuestion = await db.getFile(fileId, email);
        if (fileInQuestion === undefined) {
            next();
        } else {
            await db.deleteFile(fileId, email); 
            const filepath = path.resolve(__dirname + "/.." + "/public" + fileInQuestion.path);
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
            res.redirect(pathBack); 
        } 
    } 
});

module.exports = foldersRouter;