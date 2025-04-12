import {Client} from "pg";
import express from "express";


const app=express();
app.use(express.json());

const pgClient4=new Client("postgresql://neondb_owner:npg_UTFGDoA7WP8H@ep-spring-union-a5n919mh-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require");

pgClient4.connect();

app.post("/signup",async(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const email=req.body.email;


    const city=req.body.city;
    const country=req.body.country;
    const street=req.body.street;
    const pincode=req.body.pincode;

    try{
        // inserted into user table
        const insertQuery='INSERT INTO users (username,password,email) VALUES ($1,$2,$3) RETURNING id;'

        const addressInsertQuery='INSERT INTO addresses (city,country,street,pincode,user_id) VALUES ($1,$2,$3,$4,$5);'


        await pgClient4.query("BEGIN;");

        const response=await pgClient4.query(insertQuery,[username,password,email]);
        const userId=response.rows[0].id;

        // stop the control for 100 seconds(crash the backend for 100 seconds)
        // await new Promise(x=>setTimeout(x,100*1000));

        const addressInsertReponse=await pgClient4.query(addressInsertQuery,[city,country,street,pincode,userId]);


        
        await pgClient4.query("COMMIT;");

        res.json({
            message:"You have signed  up in transaction"
        })

    }
    catch(e){
        console.log(e);
        res.json({
            message:"Error while signing up in transaction"
        })
    }

})


app.listen(3000);