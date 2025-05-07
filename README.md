
# ImgGen 🖼️✨  
**Text-to-Image Generator & Showcase Platform**

ImgGen is a full-stack MERN application that allows users to generate AI-powered images from text prompts and upload them to a public showcase. It includes a responsive frontend built with React-Vite and a robust backend powered by Express and MongoDB. Users can preview and download generated images, as well as share their creations with others.

## 🌐 Live Demo
>[Click here](https://image-generator-4i74.vercel.app/)
>

---

## 📸 Features

### 🔵 Home Page
- Hero section introducing the platform.
- Showcase section displaying all uploaded/generated images.
- Users can see other users' creations and get inspired.
  
![Screenshot_7-5-2025_123722_localhost](https://github.com/user-attachments/assets/3164e12d-e286-47ba-85e0-90e25147d3c8)



### 🟣 Generate Page
- Split view (Left: Inputs | Right: Output):
  - **Left Side**:
    - Enter **Author Name** and **Prompt**.
    - Buttons to **Generate Image** and **Upload Post**.
  - **Right Side**:
    - Displays the generated image.
    - Image preview on click.
    - Option to **Download** the generated image.

![Screenshot_7-5-2025_123733_localhost](https://github.com/user-attachments/assets/583575d2-81de-432d-9cd9-72ad69a87092)

---

## ⚙️ Tech Stack

### 🔧 Backend
- **Node.js & Express** – REST API and server logic.
- **MongoDB** – Stores image post data.
- **Cloudinary** – Hosts images on the cloud.
- **Multer** – Handles image uploads.

### 🖥️ Frontend
- **React + Vite** – Fast, modern frontend.
- **Axios** – For API requests.
- **Tailwind CSS** – For styling.

---

## 🛣️ API Routes

- `POST /generateImage` – Generates an image using a prompt.
- `GET /getAllPosts` – Retrieves all uploaded/generated images.
- `POST /createPost` – Uploads a generated image with author info to Cloudinary and stores it in MongoDB.


---

## 🧪 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/tusharsuthar1256/Image-Generator.git
cd imggen
````

### 2. Setup the backend

```bash
cd backend
npm install
npm start
```

### 3. Setup the frontend

```bash
cd ../frontend
npm install
npm run dev
```

### 4. Environment Variables

Create a `.env` file in the `server` folder with the following:

```
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## 📌 Future Improvements

* User authentication and login system
* Like/share functionality on posts
* Support for image editing or regeneration
* Save image history per user

---

## 🧑‍💻 Author

**Tushar Suthar** – [GitHub](https://github.com/tusharsuthar1256)

```

Let me know if you’d like help updating the README with images, your name/link, or deployment instructions!
```
