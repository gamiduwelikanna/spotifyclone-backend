import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("Server is running successfully 🚀");
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
