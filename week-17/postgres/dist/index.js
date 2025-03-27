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
const pg_1 = require("pg");
// initialize the instance of the client class(client is a class)
const pgClient = new pg_1.Client("postgresql://neondb_owner:npg_UTFGDoA7WP8H@ep-spring-union-a5n919mh-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require");
//both works as the same
// const pgClient=new Client({
//     user:"neondb_owner",
//     password:"npg_UTFGDoA7WP8H",
//     port:5432,
//     host:"ep-spring-union-a5n919mh-pooler.us-east-2.aws.neon.tech",
//     database:"neondb"
// })
// this is the asynchronous function it will take time to connect to the db
// pgClient.connect();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield pgClient.connect();
        // const response =await pgClient.query("SELECT * FROM users");
        //console.log(response.rows);
        const response = yield pgClient.query("UPDATE users SET username='PUJAA' where id=1");
        console.log(response.rows);
    });
}
//call the main function
main();
