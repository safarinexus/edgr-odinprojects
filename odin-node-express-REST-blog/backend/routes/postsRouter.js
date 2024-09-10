const { Router } = require("express"); 
const postsRouter = Router(); 
const Posts = require("../models/Posts");
const Comments = require("../models/Comments");
const auth = require("../controllers/passportController");

postsRouter.post("/", auth.authenticate, async (req, res) => {
    const uid = req.user.uid;
    if (req.user.utype_id === 1) { 
        res.status(403).json({
            status: 403, 
            message: "Forbidden. Not authorised to make posts",
            origin: "posts",
        })
    } else {  
        const date = new Date().toLocaleString();
        const { title, content } = req.body; 
        await Posts.createPost(uid, title, content, date);
        res.status(201).json({
            status: 201, 
            message: "User Authenticated. Post successfully created.", 
            post: {
                title: title, 
                content: content,
                date_added: date
            },
            author: req.user.username
        });
    }  
});

postsRouter.post("/:id/comments", auth.authenticate, async (req, res) => {
    //create comments here
});

postsRouter.get("/", auth.authenticate, async (req, res) => {
    let posts = null;
    if (req.user.utype_id === 1) {
        posts = await Posts.getPosts();  
    } else { 
        posts = await Posts.getPosts(true);
    }
    res.status(200).json({ 
        status: 200,
        message: 'User Authenticated. Receiving Posts.', 
        user: req.user, 
        posts: posts,
    });
});

postsRouter.get("/:id", auth.authenticate, async (req, res) => {
    const pid = Number(req.params.id);
    const post = await Posts.getPostById(pid); 
    if (post && ((req.user.utype_id !== 1)  || (post.ptype_id !== 1 && req.user.utype_id === 1))) {
        //const comments = await Comments.getCommentsForPost(pid);
        res.status(200).json({ 
            status: 200,
            message: `User Authenticated. Receiving Post ID#${pid}`, 
            user: req.user, 
            post: post,
            //postComments: comments,
        });
    } else {
        res.status(404).json({
            status: 404, 
            message: `Post #${pid} not found.`, 
            origin: "posts",
        })
    }
});

postsRouter.patch("/:id", auth.authenticate, async (req, res) => {
    const pid = Number(req.params.id); 
    const postInQuestion = await Posts.getPostById(pid); 
    if (req.user.utype_id === 1 || req.user.uid !== postInQuestion.uid) {
        res.status(403).json({
            status: 403, 
            message: "Forbidden.", 
            origin: "posts",
        });
    } else if (postInQuestion.ptype_id === 2) {
        res.status(400).json({
            status: 400, 
            message: `Error. Post #${pid} has already been published.`, 
            postInQuestion,
        })
    } else {
        await Posts.publishPostById(pid);
        res.status(200).json({
            status: 200, 
            message: `User Authenticated. Post #${pid} has been published.`, 
            postInQuestion,
        })
    }
});

postsRouter.put("/:id", auth.authenticate, async (req, res) => {
    const pid = Number(req.params.id);
    const postInQuestion = await Posts.getPostById(pid); 
    if (req.user.utype_id === 1 || req.user.uid !== postInQuestion.uid) {
        res.status(403).json({
            status: 403, 
            message: "Forbidden. Post does not belong to you.", 
            origin: "posts",
        });
    } else {
        const { newTitle, newContent } = req.body; 
        await Posts.updatePostById(pid, newTitle, newContent); 
        res.status(200).json({
            status: 200, 
            message: `User Authenticated. Post #${pid} has been updated.`, 
            post: {
                pid: pid,
                updatedTitle: newTitle, 
                updatedContent: newContent
            },
            author: req.user.username
        });
    }
});

postsRouter.put("/:pid/comments/:cid/", auth.authenticate, async(req, res) => {
    //edit comments here
})

postsRouter.delete("/:id", auth.authenticate, async (req, res) => {
    const pid = Number(req.params.id);
    const postInQuestion = await Posts.getPostById(pid);
    if (req.user.utype_id === 1 || req.user.uid !== postInQuestion.uid) {
        res.status(403).json({
            status: 403, 
            message: "Forbidden. Post does not belong to you.", 
            origin: "posts" 
        });
    } else {
        await Posts.deletePostById(pid); 
        res.status(200).json({
            status: 200, 
            message: `User Authenticated. Post #${pid} has been deleted.`, 
            author: req.user.username
        });
    }
});



postsRouter.use("*", (req, res, next) => {
    res.status(404).json({
        status: 404, 
        message: "Resource not found.", 
        origin: "posts"
    });
});

module.exports = postsRouter;