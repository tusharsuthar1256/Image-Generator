import cors from 'cors';
import express from 'express'
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import PostRouter from './routes/Posts.route.js';
import GenerateImageRouter from "./routes/GenerateImage.route.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit:"50mb"}))
app.use(express.urlencoded({extended:true}));

app.use((err,req,res,next) => {
     const status  = err.status || 500;
     const message  = err.message || "Something want wrong !!!";
     return res.status(status).json({
          success:false,
          status,
          message
     })
}) 

app.use("/api/post",PostRouter)
app.use("/api/generateImage",GenerateImageRouter)

app.get("/",async(req,res) => {
     res.status(200).json({
          message:"Hello I am Server "
     })
})

const connectDB = () => {
     mongoose.set("strictQuery",true);
     mongoose.connect(process.env.MONGODB_URL)
          .then(() => console.log("MONGODB CONNECTED !!!"))
          .catch((err) => {
               console.error("Failed to connect DB");
               console.error(err);
          })
}

const startServer = () => {
     try {
          connectDB()
          app.listen(8000,() => console.log("Server listening on port no 8000"))
     } catch (error) {
          console.log(error);
          
     }
}
startServer()