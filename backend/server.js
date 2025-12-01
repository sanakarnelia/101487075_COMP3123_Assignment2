import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRoutes from "./routes/user_routes.js"
import employeeRoutes from "./routes/employee_routes.js"



const app = express();
const PORT = 3000;
const cONNECTION_STRING ="mongodb+srv://admin:sana@comp3123.780b9n4.mongodb.net/comp3123_assigment1?retryWrites=true&w=majority&appName=comp3123";

app.use(cors());
app.use(express.json());

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/emp",employeeRoutes);



app.get("/", (req, res) => res.send("Server running"));


mongoose.connect(cONNECTION_STRING)
    .then(()=>{
            console.log("connected to mongoDB");
            app.listen(PORT,()=>{
                console.log("server is runing"); 
            })
    }).catch((error)=>{
        console.log("error connecting to mongoDB",error.message);
    });
    

