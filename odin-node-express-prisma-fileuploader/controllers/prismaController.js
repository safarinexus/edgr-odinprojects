const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

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

exports.addFile = async (path, name, date, size, type, email, folder=null) => {
    try { 
        await prisma.file.create({
            data: {
                file_name: name, 
                file_size: size, 
                date_added: date,
                owner_email: email, 
                path: path, 
                file_type: type,
                folder_id: folder, 
            }
        });
    } catch (err) {    
        console.log(err);
    }
}

exports.createFolder = async (folder, owner, parent=null) => {
    try {
        await prisma.folder.create({
            data: {
                folder_name: folder,
                parent_id: parent,
                owner_email: owner,
            }
        })
    } catch (err) {
        console.log(err);
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

exports.getFile = async (id, email) => {
    try { 
        const res = await prisma.file.findFirst({
            where: {
                AND: [
                    {
                        owner_email: email,
                    }, 
                    {
                        file_id: id,
                    },
                ] 
            }
          });
        return res; 
    } catch (err) {    
        console.log(err);
    }
}

exports.getFiles = async (email, folder=false) => {
    try { 
        if (folder === false) {
            const files = await prisma.file.findMany({
                where: {
                  owner_email: {
                    equals: email,
                  },
                },
              })
            return files;
        } else { 
            const files = await prisma.file.findMany({
                where: {
                    AND:[
                        {
                            owner_email: {
                                equals: email,
                            },
                        }, 
                        {
                            folder_id: {
                                equals: folder,
                            },
                        }
                    ]
                },
              })
            return files;
        }
    } catch (err) {
        console.log(err);
    }
}

exports.getFolder = async (folderId) => {
    try { 
        const resource = await prisma.folder.findFirst({
            where: {
                folder_id: {
                    equals: folderId,
                }
            },
        })
        return resource; 
    } catch (err) {    
        console.log(err);
    }
}

exports.getFolders = async (owner, parentId=null) => {
    try { 
        const resource = await prisma.folder.findMany({
            where: {
                AND:[
                    {
                        owner_email: {
                            equals: owner,
                        },
                    }, 
                    {
                        parent_id: {
                            equals: parentId,
                        },
                    }
                ]
            },
        })
        return resource; 
    } catch (err) {    
        console.log(err);
    }
}

exports.updateFolder = async(id, newName) => {
    try {
        await prisma.folder.update({
            where: {
              folder_id: id,
            },
            data: {
              folder_name: newName,
            },
          })
    } catch (err) {
        console.log(err);
    }
}

exports.deleteFile = async(id) => {
    try {
        await prisma.file.delete({
            where: {
                file_id: id
            },
        })
    } catch (err) {
        console.log(err);
    }
}

exports.deleteFiles = async(folderId) => {
    try {
        await prisma.user.deleteMany({
            where: {
              folder_id: {
                equals: folderId,
              },
            },
          })
    } catch (err) {
        console.log(err);
    }
}

exports.deleteFolders = async(folderId) => {
    try {
        await prisma.user.deleteMany({
            where: {
              folder_id: {
                equals: folderId,
              },
            },
          })
    } catch (err) {
        console.log(err);
    }
}