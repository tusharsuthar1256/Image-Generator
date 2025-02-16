import Post from "../models/posts.model.js";
import * as dotenv from "dotenv";
import {createError} from "../error.js";
import {v2 as cloudinary} from "cloudinary";

dotenv.config();


cloudinary.config({ 
     cloud_name: process.env.CLOUDNIARY_NAME, 
     api_key:process.env.CLOUDNIARY_KEY , 
     api_secret: process.env.CLOUDNIARY_SECRET 
 });

const getAllPosts = async(req,res,next) => {
     try {
          const post = await Post.find({});
          return res.status(200).json({success:true,data:post})
     } catch (error) {
          next(createError(error.status,error?.response?.data?.error?.message || error?.message))
     }
}

const createPost = async(req,res,next) => {
     try {
          const {name,prompt,photo} = req.body;
          const photoUrl = await cloudinary.uploader.upload(photo);
          const newPost = await Post.create({
               name,
               prompt,
               photo:photoUrl?.secure_url
          })

          return res.status(200).json({success:true,data:newPost})
     } catch (error) {
          next(createError(error.status,error?.response?.data?.error?.message || error?.message))
     }
}


export {
     getAllPosts,
     createPost
}
