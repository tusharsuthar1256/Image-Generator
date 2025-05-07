import React, { useEffect, useState } from "react";
import axios from 'axios'





function Discover() {
  const [copiedPrompt, setCopiedPrompt] = useState("");
  const [getAllPostsdata,setGetAllPostsdata] = useState({});
  

  useEffect(() => {

   let config = {
     method: 'get',
     maxBodyLength: Infinity,
     url: `https://image-gen-jgur.onrender.com/api/post/`,
     headers: { }
   };


   axios.request(config)
   .then((response) => {
     setGetAllPostsdata(response.data.data || [])

   })
   .catch((error) => {
     console.log(error);
   });
  },[])

  const handleCopy = (prompt) => {
    navigator.clipboard.writeText(prompt);
    setCopiedPrompt(prompt);
    setTimeout(() => setCopiedPrompt(""), 2000); // Reset copied state after 2 sec
  };

  return (
    <main className="min-h-screen w-full bg-[#17192E] text-white py-10 px-8">
      {/* Heading */}
      <h1 className="text-5xl font-bold text-center mt-10 mb-20">Discover</h1>

      {/* Masonry Grid Layout */}
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-5 space-y-4 px-4 md:px-20">
      {Array.isArray(getAllPostsdata) && getAllPostsdata.map((img, index) => (
  <div key={index} className="relative group">
    <img
      src={img.photo}
      alt="Generated"
      className="w-full rounded-lg shadow-lg transition-all duration-300  hover:blur-[3px]"
    />
    <div className="absolute bottom-0 right-0 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg p-4">
      <p className="text-end text-[14px]">{img.prompt}</p>
      <p className="text-end text-[14px] font-semibold">- {img.name}</p>
    </div>
  </div>
))}

      </div>
    </main>
  );
}

export default Discover;
