import express from "express";
import bodyParser from "body-parser";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";

const app = express();
// enable CORS for all origins
app.use(cors());

// or if you only want to allow specific frontend:
app.use(cors({
  origin: "http://localhost:3000",  // React frontend
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(bodyParser.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;
    console.log(process.env.GEMINI_API_KEY);
    const result = await model.generateContent(message);
    res.json({ reply: result.response.text() });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(5000, () => console.log("Chatbot server running on port 5000"));
