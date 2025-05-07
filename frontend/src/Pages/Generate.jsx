import React, { useState } from 'react';
import axios from 'axios';
import { TfiDownload } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";

function Generate() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authorName, setAuthorName] = useState("");
  const [prompt, setPrompt] = useState("");
  const [outputImg, setOutputImg] = useState(""); 
  const [base64Img, setBase64Img] = useState("");   
  const [loading, setLoading] = useState(false);

  const genImage = () => {
    if (!prompt) {
      alert("Please enter a prompt before generating an image.");
      return;
    }
    setOutputImg("");
    setBase64Img("");
    setLoading(true);

    const data = JSON.stringify({ prompt });
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: "https://image-gen-jgur.onrender.com/api/generateImage",
      headers: { 'Content-Type': 'application/json' },
      data: data,
      responseType: 'blob', 
    };

    axios.request(config)
      .then((response) => {
        const imageBlob = response.data;
        const imageUrl = URL.createObjectURL(imageBlob);
        setOutputImg(imageUrl);

        const reader = new FileReader();
        reader.readAsDataURL(imageBlob);
        reader.onloadend = () => {
          setBase64Img(reader.result);
        };
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const downloadImage = () => {
    if (!outputImg) return;
    const link = document.createElement('a');
    link.href = outputImg;
    link.download = "generated_image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const uploadPost = () => {
    if (!authorName || !prompt || !base64Img) {
      alert("Please provide an author name, prompt, and generate an image before uploading.");
      return;
    }

    const data = JSON.stringify({
      name: authorName,
      prompt: prompt,
      photo: base64Img, 
    });

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_BACKEND_ENDPOINT}/api/post/`,
      headers: { 'Content-Type': 'application/json' },
      data: data,
    };

    axios.request(config)
      .then((response) => {
      })
      .catch((error) => {
        console.error("Error uploading post:", error);
      });
  };

  return (
    <main className="md:flex md:justify-center    min-h-screen w-full bg-[#17192E] py-6 px-4 text-white flex flex-col md:flex-row gap-6">
      {/* Left Section */}
      <div className="w-full md:w-[40%] flex flex-col justify-center items-center p-6 rounded-lg border-dashed border-[#5254B7] border-2">
        <div className="w-full">
          <h2 className="text-[#5254B7] text-center text-2xl md:text-3xl font-bold mb-6">
            Enjoy Generating
          </h2>
          
          <label htmlFor="authorName" className="block mb-2 text-lg">
            Enter Author Name:
          </label>
          <input
            type="text"
            id="authorName"
            name="authorName"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            className="text-white mb-6 w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your name"
          />
          
          <label htmlFor="prompt" className="block mb-2 text-lg">
            Enter Prompt:
          </label>
          <textarea
            id="prompt"
            name="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="h-24 w-full p-2 rounded-md text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter the prompt to generate an image !!!"
          />
          
          <div className="w-full flex flex-col md:flex-row justify-between items-center mt-4 gap-4">
            <button
              type="button"
              onClick={uploadPost}
              className="w-full md:w-1/2 cursor-pointer bg-[#5254B7] px-4 py-3 rounded-lg hover:bg-[#494a86]"
            >
              Upload Post
            </button>
            <button
              type="button"
              onClick={genImage}
              disabled={loading}
              className="w-full md:w-1/2 cursor-pointer bg-[#5254B7] px-4 py-3 rounded-lg hover:bg-[#494a86] flex justify-center items-center"
            >
              {loading ? "Generating..." : "Generate Image"}
            </button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-[40%] relative flex justify-center items-center p-4 rounded-lg border-dashed border-[#5254B7] border-2 group">
        {loading ? (
          <div className="flex items-center justify-center w-full h-64">
            <p>Loading...</p>
          </div>
        ) : outputImg ? (
          <img 
            src={outputImg}
            className="w-full h-full object-contain rounded-lg cursor-pointer"
            alt="Generated Image" 
            onClick={() => setIsModalOpen(true)}
          />
        ) : (
          <p className="text-center">No image generated yet.</p>
        )}

        <button 
          onClick={downloadImage}
          className="cursor-pointer absolute bottom-4 right-4 bg-[#5254B7] text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <TfiDownload />
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center p-4 z-50">
          <div className="relative w-full max-w-3xl">
            <button 
              className="cursor-pointer absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full"
              onClick={() => setIsModalOpen(false)}
            >
              <IoClose size={24} />
            </button>
            <img 
              src={outputImg || "https://via.placeholder.com/600"} 
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              alt="Expanded View" 
            />
          </div>
        </div>
      )}
    </main>
  );
}

export default Generate;
