import * as dotenv from "dotenv";
import { createError } from "../error.js";
import axios from "axios";
import FormData from "form-data";

dotenv.config();

const generateImage = async (req, res, next) => {
  try {
    const { prompt } = req.body;

    const formData = new FormData();
    formData.append("prompt", prompt);
    formData.append("style", "realistic");        
    formData.append("aspect_ratio", "1:1");         

    const response = await axios.post(
      "https://api.vyro.ai/v2/image/generations",
      formData,
      {
        headers: {
          "Authorization": `Bearer ${process.env.IMG_GENERATE_KEY}`,
          ...formData.getHeaders(),
        },
        responseType: "arraybuffer", 
      }
    );

    res.set("Content-Type", "image/png");
    return res.status(200).send(response.data);
  } catch (error) {
    next(
      createError(
        error?.response?.status || 500,
        error?.response?.data?.error?.message || error.message
      )
    );
  }
};

export { generateImage };
