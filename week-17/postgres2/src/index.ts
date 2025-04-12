// import  {Client} from "pg";
// import express from "express";



// const app=express();
// app.use(express.json());

// const pgClient3=new Client("postgresql://neondb_owner:npg_UTFGDoA7WP8H@ep-spring-union-a5n919mh-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require");

// pgClient3.connect();

// app.post("/signup",async(req,res)=>{
//     const username=req.body.username;
//     const password=req.body.password;
//     const email=req.body.email;

//     const city=req.body.city;
//     const country=req.body.country;
//     const street=req.body.street;
//     const pincode=req.body.pincode;

//     try{
//         //inserted into user table
//         const insertQuery='INSERT INTO users (username,password,email) VALUES ($1,$2,$3) RETURNING id;'

//         // it somehow returns the id of that new user
//         const response=await pgClient3.query(insertQuery,[username,password,email]);

//         const userId=response.rows[0].id;

//         const addresssInsertQuery='INSERT INTO addresses (city,country,street,pincode,user_id) VALUES ($1,$2,$3,$4,$5);'

//         const addressInsertReponse=await pgClient3.query(addresssInsertQuery,[city,country,street,pincode,userId]);

//         res.json({
//             message:"You have signed  up"
//         })
//     }catch(e){
//         console.log(e);
//         res.json({
//             message:"Error while signing up"
//         })
//     }

// })


// app.listen(3000);



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


app.get("/metadata",async(req,res)=>{
    const id=req.body.id;

    const query1='SELECT * FROM users WHERE id=$1';
    const response1=await pgClient4.query(query1,[id]);

    const query2='SELECT * FROM addresses WHERE user_id=$1';
    const response2=await pgClient4.query(query2,[id]);

    res.json({
        user:response1.rows[0],
        address:response2.rows[0]
    })

})


app.listen(3000);