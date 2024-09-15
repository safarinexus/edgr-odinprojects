const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

exports.createCommentForPost = async (content, timestamp, uid, pid) => {
    try {
        await prisma.comment.create({
            data: {
                content: content, 
                timestamp: timestamp, 
                uid: uid, 
                pid: pid, 
            }, 
        })
    } catch (err) {
        console.error(err);
    }
}

exports.getCommentsForPost = async (pid) => {
    try {
        const postComments = await prisma.comment.findMany({
            where: {
                pid: pid, 
            }
        });
        return postComments;
    } catch (err) {
        console.error(err);
    }
};

exports.deletePostComments = async (pid) => {
    try {
        await prisma.comment.deleteMany({
            where: {
              pid: {
                equals: pid,
              },
            },
          })
    } catch (err) { 
        console.error(err);
    }
}