import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get('/', (request, response)=>{
    console.log(request)
    return response.status(234).send("Welcoe to MERN stack")
});

app.post('/books', async (request, response) => {
    try {
        if(
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ){}
    } catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log('App connected to database');
        app.listen(PORT, ()=> {
            console.log('App is listening to port: ${PORT}');
        });
    })
    .catch((error)=>{
        console.log(error);
    })