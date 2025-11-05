# ✍ Text-to-Handwriting Mobile App

A cross-platform mobile application (Android/iOS) that converts typed text into realistic handwritten documents. This app allows users to customize handwriting styles, pen colors, and paper backgrounds, and then export the final document as a high-quality PNG image or PDF.

This project was built as a full-stack application using React Native (Expo) for the frontend and Node.js (Express) for the backend.

## 📸 Screenshots

*(You can add your app screenshots here, like the app1.jpg you shared)*

| Home Screen | Preview Screen |
| :---: | :---: |
|  |  |

---

## ✨ Features

* *Multi-line Text Input:* A simple text area to type or paste your content.
* **.txt File Upload:** Upload a .txt file, and its content will be loaded directly into the app.
* *Font Customization:* Choose from multiple handwritten font styles (e.g., Kalam, Great Vibes, Indie Flower).
* *Pen Color Selection:* A palette of 6 common pen colors (Black, Blue, Red, Green, etc.).
* *Paper Background:* Select either a "Plain" white background or a "Lined" (ruled) paper background.
* *Instant Preview:* A dedicated screen to preview the generated document before saving.
* *Image Export:* Share the final document as a high-quality *PNG* file.
* *PDF Export:* Share the final document as a high-quality *PDF* file.

---

## 🛠 Tech Stack

### Frontend (Mobile App)
* *React Native* (with *Expo*)
* *React Navigation:* For screen navigation (Home to Preview).
* *Axios:* For making API requests to the backend.
* *Expo Document Picker:* For selecting .txt files.
* *Expo File System:* For reading .txt files and saving generated documents.
* *Expo Sharing:* For native sharing of PNG/PDF files.

### Backend (Server)
* *Node.js* (with *Express.js*)
* **node-canvas:** The core engine for drawing text, lines, and generating the PNG image.
* **pdf-lib:** For embedding the generated PNG into a PDF document.
* *CORS:* To handle requests from the mobile app.

---

## 🚀 Getting Started (Installation)

Follow these steps to run the project on your local machine.

### Prerequisites
* [Node.js](https://nodejs.org/) (LTS version)
* Git
* Expo Go app (on your mobile phone)
* A code editor (like VS Code)

### 1. Backend Setup (Server)

First, set up the backend server:

bash
# 1. Clone the project (or navigate to your folder)
# git clone [your-repo-url]
# cd [backend-folder-name]  (e.g., handwriting-api-express)

# 2. Install all packages
npm install

# 3. IMPORTANT: Setup Fonts
#    Add your .ttf font files inside the '/fonts' folder
#    (e.g., Kalam-Regular.ttf, IndieFlower-Regular.ttf, etc.)

# 4. Start the server
npm run dev 
# (Or your custom start script)

# The server will now be running at http://localhost:5000 (or your port)

### 2. Frontend Setup (Mobile App)


# 1. Navigate to the frontend folder
# cd [frontend-folder-name] (e.g., HandwritingApp)

# 2. Install all packages
npm install

# 3. IMPORTANT: Update the API URL
#    Find your computer's local Wi-Fi IP address (e.g., 192.168.1.10)
#    Open the HomeScreen.js and Preview.js files
#    Update the 'API_URL' variable to match your backend IP:
#    const API_URL = "[http://192.168.1.10:5000/api/generate-pdf](http://192.168.1.10:5000/api/generate-pdf)";

# 4. Start the app
npx expo start

# 5. Scan the QR code with the Expo Go app on your phone

## 📦 API Endpoints
### 1. Generate Image
* *Route:* POST /api/generate
* *Body:* { text, fontStyle, penColor, background }
* *Success Response:* image/png (High-quality image buffer)

### 2. Generate PDF
* *Route:* POST /api/generate-pdf
* *Body:* { text, fontStyle, penColor, background }
* *Success Response:* text/plain (Base64 string of the generated PDF)

### 👤 Author
Arpit Pandey