// server.js
// This is the main entry point for the backend Express server.
// It configures the server, connects to MongoDB and Cloudinary, sets up middleware, and defines API routes.
//
// Main responsibilities:
// - Load environment variables
// - Connect to MongoDB and Cloudinary
// - Set up Express app and middleware (CORS, JSON parsing)
// - Define API routes for user, admin, and doctor
// - Start the server and listen on the specified port

import express from "express"
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoute.js"
import doctorRouter from "./routes/doctorRoute.js"
import adminRouter from "./routes/adminRoute.js"
import dotenv from 'dotenv';
dotenv.config();


// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.use("/api/user", userRouter)
app.use("/api/admin", adminRouter)
app.use("/api/doctor", doctorRouter)

app.get("/", (req, res) => {
  res.send("API Working")
});

app.listen(port, () => console.log(`Server started on PORT:${port}`))