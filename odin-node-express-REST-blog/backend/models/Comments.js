const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

exports.getCommentsForPost = async (pid) => {
    try {
        const postComments = prisma.comment.findMany({
            where: {
                pid: pid, 
            }
        });
        return postComments;
    } catch (err) {
        console.error(err);
    }
};