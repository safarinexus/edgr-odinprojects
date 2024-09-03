const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const multer = require("multer");
const upload = multer({ dest: './public' });

exports.createUser = async (email, password) => {
    try {
        await prisma.user.create({
            data: {
               email: email, 
               password: password
            }
        }) 
        return true;
    } catch (err) { 
        console.log(err); 
        return false; 
    }
}

exports.getUser = async (email) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
              email: email,
            },
        })
        return user; 
    } catch (err) {
        console.log(err); 
    }
    
}

exports.getUsers = async () => {
    try {
        const users = await prisma.user.findMany()
        return users; 
    } catch (err) {
        console.log(err); 
    }
}



