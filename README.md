# AI FAQ Assistant 🤖

An AI-powered FAQ Assistant built using Next.js, Node.js, Express.js, MongoDB Atlas, and OpenRouter AI. Users can ask questions, receive AI-generated responses, 
and view stored conversation history.

# 🚀 Live Demo
Frontend (Vercel)

[ai-faq-assistant-mtxh07brs-ankit-vermas-projects-b6fa17d6.vercel.app](https://ai-faq-assistant-mtxh07brs-ankit-vermas-projects-b6fa17d6.vercel.app/)

# Backend (Render)

https://ai-faq-assistant-72fa.onrender.com

# 📌 Features

✅ AI-powered question answering

✅ Modern chat interface

✅ Conversation history stored in MongoDB Atlas

✅ REST API for fetching previous conversations

✅ OpenRouter AI integration

✅ Responsive UI with Next.js

✅ Cloud deployment using Vercel & Render

# 🛠 Tech Stack

- Frontend
Next.js
React.js
Axios
Tailwind CSS

- Backend
Node.js
Express.js

- Database
MongoDB Atlas
Mongoose

-AI Integration
OpenRouter API

- Deployment
Vercel (Frontend)
Render (Backend)

# 📂 Project Structure
# AI FAQ Assistant

# AI FAQ Assistant

```plaintext
AI-FAQ-Assistant
│
├── client
│   ├── app
│   ├── public
│   ├── package.json
│   └── ...
│
├── server
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── README.md
```


# ⚙️ Installation & Setup
- Clone Repository
git clone https://github.com/CodingwithAnkit-tech/AI-FAQ-Assistant.git
cd AI-FAQ-Assistant

- Backend Setup
cd server
npm install

- Create .env

PORT=5000

MONGO_URI=your_mongodb_connection_string

OPENAI_API_KEY=your_openrouter_api_key

- Run Backend

npm run dev

- Backend URL

http://localhost:5000
Frontend Setup
cd client
npm install

- Create .env.local

NEXT_PUBLIC_API_URL=http://localhost:5000

- Run Frontend

npm run dev

- Frontend URL

http://localhost:3000

# 🔗 API Endpoints
Ask AI
POST
/api/chat

Request:

{
  "question": "What is Machine Learning?"
}

- - Response:

{
  "answer": "Machine Learning is a subset of AI..."
}
Get Conversation History
GET
/api/conversations

Response:

[
  {
    "question": "What is Machine Learning?",
    "answer": "Machine Learning is...",
    "timestamp": "2026-06-09T09:38:29.293Z"
  }
]

# 🌐 Deployment
- Frontend
Deployed on Vercel

- Backend
Deployed on Render

- Database
MongoDB Atlas

# 📸 Screenshots
Home Page

AI Response

<img width="1812" height="962" alt="image" src="https://github.com/user-attachments/assets/910e27db-87b0-46af-90c0-2605599ab8bd" />




# 🎯 Assignment Requirements Covered
- Requirement	Status
- Next.js Frontend	✅
- Node.js + Express Backend	✅
- MongoDB Integration	✅
- AI Model Integration	✅
- Store Conversations	✅
- Fetch Previous Conversations API	✅
- GitHub Repository	✅
- Deployment	✅

# 👨‍💻 Author

Ankit Verma

- GitHub: CodingwithAnkit-tech
- B.Tech CSE Student
- Data Analyst & AI/ML Enthusiast

# ⭐ If you found this project useful, please consider giving it a star.
