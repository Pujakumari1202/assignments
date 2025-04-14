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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
// create an instance of the class
const client = new client_1.PrismaClient();
function createUser() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.user.create({
            data: {
                username: "puja",
                password: "1234",
                age: 22,
                city: "Delhi"
            }
        });
    });
}
function deleteteUser() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.user.delete({
            where: {
                id: 1
            }
        });
    });
}
function updateUser() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.user.update({
            where: {
                id: 1
            },
            data: {
                username: "puja"
            }
        });
    });
}
//read the user
function readUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield client.user.findFirst({
            where: {
                id: 1
            },
            // //just want the user name
            // select:{
            //     username:true
            // }
        });
        // console.log(user?.username)
        console.log(user);
    });
}
// after foreign table create (relationship)
function relationUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield client.user.findFirst({
            where: {
                id: 1
            },
            // give me user and also the todos
            include: {
                todos: true
            }
        });
        console.log(user);
    });
}
//deleteteUser();
//createUser();
//adUser();
relationUser();
