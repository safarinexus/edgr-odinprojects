const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

exports.createPost = async (uid, title, content, timestamp) => {
    
    try {
        await prisma.post.create({
            data: {
                title: title, 
                content: content, 
                timestamp: timestamp,
                uid: uid,
            }
        })
    } catch (err) {
        console.error(err);
    }
};

exports.getPosts = async (unpublished=false) => {
    try {
        if (unpublished) { 
            const publishedPosts = prisma.post.findMany(); 
            return publishedPosts;
        } else { 
            const posts = prisma.post.findMany({
                where: {
                    ptype_id: 2, 
                }
            });
            return posts;
        }
    } catch (err) {
        console.error(err);
    }
};

exports.getPostById = async (pid) => {
    try {
        const post = prisma.post.findFirst({
            where: {
                pid: pid
            }
        }); 
        return post;
    } catch (err) {
        console.error(err);
    }
};

exports.getPostByTitle = async (title) => {
    try {
        const post = prisma.post.findFirst({
            where: {
                title: title,
            }
        }); 
        return post;
    } catch (err) {
        console.error(err);
    }
};

exports.publishPostById = async (pid) => {
    try {
        await prisma.post.update({
            where: {
                pid: pid, 
            },
            data: {
                ptype_id: 2, 
            }
        })
    } catch (err) { 
        console.error(err);
    }
}

exports.updatePostById = async (pid, newTitle, newContent) => {
    try {
        await prisma.post.update({
            where: {
                pid: pid,
              },
            data: {
                title: newTitle,
                content: newContent 
            },
        }); 
    } catch (err) {
        console.error(err);
    }
};

exports.deletePostById = async (pid) => {
    try { 
        await prisma.post.delete({ 
            where: {
                pid: pid,
            },
        })
    } catch (err) { 
        console.error(err);
    }
}