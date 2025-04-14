import express from 'express';
import { PrismaClient } from '@prisma/client';
import { read } from 'fs';
// create an instance of the class
const client = new PrismaClient();

const app=express();
app.use(express.json())


// return all the users end point
app.get("/users",async(req,res)=>{
    const users=await client.user.findMany();
    res.json({
        users
    })

})


// create user for specific id end point
app.get("/todos/:id",async(req,res)=>{
    // we can add zod here
    const id=req.params.id ;// this give us a string so we convert to number
    const users=await client.user.findFirst({
        where:{
            id:Number(id)
        },
        // now we want all todos,username and password
        select:{
            todos:true,
            username:true,
            password:true,
        }
    });
    res.json({
        users
    })

})



app.listen(3000);

// async function createUser(){
//     await client.user.create({
//         data:{
    
//             username:"puja",
//             password:"1234",
//             age:22,
//             city:"Delhi"
//         }
//     })

// }

// async function deleteteUser(){
//     await client.user.delete({
//         where:{
//             id:1
//         }
//     })

// }

// async function updateUser(){
//     await client.user.update({
//         where:{
//             id:1
//         },
//         data:{
//             username:"puja"
//         }
//     })

// }
// //read the user
// async function readUser(){
//     const user=await client.user.findFirst({
//         where:{
//             id:1
//         },
//         // //just want the user name
//         // select:{
//         //     username:true
           
//         // }
//     })

//    // console.log(user?.username)
//     console.log(user)

// }


// // after foreign table create (relationship)

// async function relationUser(){
//     const user=await client.user.findFirst({
//         where:{
//             id:1
//         },
//         // give me user and also the todos
//         include:{
//             todos:true
//         }
//     })
//     console.log(user)

// }




// //deleteteUser();

// //createUser();

// //adUser();
// relationUser();
