import {Client} from "pg";

// initialize the instance of the client class(client is a class)
const pgClient=new Client("postgresql://neondb_owner:npg_UTFGDoA7WP8H@ep-spring-union-a5n919mh-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require");

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

async function main(){
    await pgClient.connect();
    const response =await pgClient.query("SELECT * FROM users");
    console.log(response.rows);
    // const response=await pgClient.query("UPDATE users SET username='PUJAA' where id=1");
    // console.log(response.rows);
    
}


//call the main function
main();