const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

exports.createUser = async (username, password) => {
    try {
        await prisma.user.create({
            data: {
                username: username, 
                password: password
            }
        })
    } catch (err) { 
        console.error(err);
    }
}

exports.getUsers = async () => {
    try {
        const users = await prisma.user.findMany();
        return users;
    } catch (err) {
        console.error(err);
    }
}

exports.getUserById = async (uid) => {
    try {
        const user = await prisma.user.findFirst({
            where: {
                uid: uid, 
            }
        });
        return user;
    } catch (err) {
        console.error(err);
    }
};

exports.getUserByUsername = async (username) => {
    try {
        const user = await prisma.user.findFirst({
            where: {
                username: username,
            }
        });
        return user;
    } catch (err) {
        console.error(err);
    }
};

exports.upgradeUserById = async (uid) => {
    try {
        await prisma.user.update({
            where: {
                uid: uid,
            }, 
            data: {
                utype_id: 2,
            }
        });
    } catch (err) {
        console.error(err);
    }
}