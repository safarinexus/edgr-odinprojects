const { Router } = require("express"); 
const postsRouter = Router(); 
const Posts = require("../models/Posts");
const Comments = require("../models/Comments");
const auth = require("../controllers/passportController");

//create a new unpublished post
postsRouter.post("/", auth.authenticate, async (req, res) => {
    //this doesnt contain anyth 
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


//Add a comment
postsRouter.post("/:id/comments", auth.authenticate, async (req, res) => {
    const pid = Number(req.params.id); 
    const post = await Posts.getPostById(pid); 
    if (!post) {
        res.status(404).json({
            status: 404, 
            message: "Resource not found.", 
            origin: "posts",
        })
    } else {
        const uid = Number(req.user.uid);
        const date = new Date().toLocaleString();
        const { content } = req.body; 
        await Comments.createCommentForPost(content, date, uid, pid); 
        res.status(200).json({
            status: 200, 
            message: "User Authenticated, Comment Added.", 
            comment: {
                content: content, 
                timestamp: date, 
                from: req.user,
            }
        });
    } 
});

//get posts(published or all based on user)
postsRouter.get("/", auth.authenticate, async (req, res) => {
    const posts = await Posts.getPublishedPosts();  
    res.status(200).json({ 
        status: 200,
        message: 'User Authenticated. Receiving Posts.', 
        user: req.user, 
        posts: posts,
    });
});

postsRouter.get("/admin", auth.authenticate, async (req, res) => {
    if (req.user.utype_id !== 1) {
        const posts = await Posts.getAdminPostsByAuthor(req.user.uid);
        res.status(200).json({ 
            status: 200,
            message: 'User Authenticated. Receiving Posts.', 
            user: req.user, 
            posts: posts,
        });
    } else {
        res.status(404).json({
            status: 404, 
            message: "Resource not found.", 
            origin: "posts",
        })
    }
})

//get a specific post
postsRouter.get("/:id", auth.authenticate, async (req, res) => {
    const pid = Number(req.params.id);
    const post = await Posts.getPostById(pid); 
    if (post && ((req.user.utype_id !== 1)  || (post.ptype_id !== 1 && req.user.utype_id === 1))) {
        const comments = await Comments.getCommentsForPost(pid);
        res.status(200).json({ 
            status: 200,
            message: `User Authenticated. Receiving Post ID#${pid}`, 
            user: req.user, 
            post: post,
            postComments: comments,
        });
    } else {
        res.status(404).json({
            status: 404, 
            message: `Post #${pid} not found.`, 
            origin: "posts",
        })
    }
});

//get comments for post
postsRouter.get("/:id/comments", auth.authenticate, async (req, res) => {
    const pid = Number(req.params.id); 
    const postInQuestion = await Posts.getPostById(pid); 
    if (postInQuestion !== null) {
        const comments = await Comments.getCommentsForPost(pid);
        res.status(200).json({
            status: 200, 
            message: `User Authenticated. Comments for Post #${pid}`, 
            user: req.user, 
            comments: comments
        })
    }
});


//publish/unpublish post
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
        await Posts.unpublishedPostById(pid);
        res.status(200).json({
            status: 200, 
            message: `User Authenticated. Post #${pid} has been unpublished.`, 
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

//update a post
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
        const { title, content } = req.body; 
        await Posts.updatePostById(pid, title, content); 
        res.status(200).json({
            status: 200, 
            message: `User Authenticated. Post #${pid} has been updated.`, 
            post: {
                pid: pid,
                updatedTitle: title,  
                updatedContent: content, 
            },
            author: req.user.username
        });
    }
});

//delete a post
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
        await Comments.deletePostComments(pid);
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