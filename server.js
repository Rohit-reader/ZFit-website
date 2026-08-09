import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname } from "path";
//testing npx run dev command
//small sample change
//this is a command
// Get current file path in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
// Allow requests from your Vite frontend (5173) and any other origin if needed
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/zfit";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => {
  console.error("❌ MongoDB connection error:", err);
  process.exit(1);
});

// Registration Schema
const registrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  place: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true, enum: ["male", "female", "other"] },
  timing: { type: String, required: true },
  plan: {
    id: String,
    name: String,
    price: mongoose.Schema.Types.Mixed,
    duration: String,
  },
  registrationDate: { type: Date, default: Date.now },
});

const Registration = mongoose.model("Registration", registrationSchema);

// Routes
app.post("/api/register", async (req, res) => {
  try {
    const { name, email, phone, place, timing, age, gender, plan } = req.body;

    if (!name || !email || !phone || !place || !timing || !age || !gender || !plan) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const registration = new Registration({
      name,
      email,
      phone,
      place,
      timing,
      age,
      gender,
      plan,
    });

    await registration.save();

    res.status(201).json({ success: true, message: "Registration successful", data: registration });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ success: false, message: "Server error, please try again later" });
  }
});

// Test Route
app.get("/", (req, res) => res.send("Server is running"));

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
