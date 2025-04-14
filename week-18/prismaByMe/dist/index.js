"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
// create an instance of the class
const client = new client_1.PrismaClient();
const app = (0, express_1.default)();
app.use(express_1.default.json());
// return all the users end point
app.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield client.user.findMany();
    res.json({
        users
    });
}));
// create user for specific id end point
app.get("/todos/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // we can add zod here
    const id = req.params.id; // this give us a string so we convert to number
    const users = yield client.user.findFirst({
        where: {
            id: Number(id)
        },
        // now we want all todos,username and password
        select: {
            todos: true,
            username: true,
            password: true,
        }
    });
    res.json({
        users
    });
}));
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
