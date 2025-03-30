import {Client} from "pg";
import express from "express";


const app=express();
app.use(express.json());


const pgClient3=new Client("postgresql://neondb_owner:npg_UTFGDoA7WP8H@ep-spring-union-a5n919mh-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require");

pgClient3.connect();

app.post("/signup",async(req:any,res:any)=>{
    const username=req.body.username;
    const password=req.body.password;
    const email=req.body.email;

    try{

        

        const inserQuery = `INSERT INTO users (username, password, email) VALUES ($1, $2, $3);`;



        const response=await pgClient3.query(inserQuery ,[username,password,email]);


        res.json({
            message:"You have signed up"
        })
   

    }catch(e){
        res.json({
            message:"Something went wrong"
        })
    }

    
})


app.listen(3000)