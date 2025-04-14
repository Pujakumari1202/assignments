import { PrismaClient } from '@prisma/client';
import { read } from 'fs';
// create an instance of the class
const client = new PrismaClient();


async function createUser(){
    await client.user.create({
        data:{
    
            username:"puja",
            password:"1234",
            age:22,
            city:"Delhi"
        }
    })

}

async function deleteteUser(){
    await client.user.delete({
        where:{
            id:1
        }
    })

}

async function updateUser(){
    await client.user.update({
        where:{
            id:1
        },
        data:{
            username:"puja"
        }
    })

}
//read the user
async function readUser(){
    const user=await client.user.findFirst({
        where:{
            id:1
        },
        // //just want the user name
        // select:{
        //     username:true
           
        // }
    })

   // console.log(user?.username)
    console.log(user)

}



//deleteteUser();

//createUser();

readUser();
