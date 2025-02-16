import express from 'express';
import { generateImage } from '../controllers/GenerateImage.controller.js';

const router = express.Router();

router.post("/",generateImage);


export default router;