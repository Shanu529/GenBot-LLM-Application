import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoutes from "./routes/chatRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/chat", chatRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`AI Service running on port ${PORT}`);
});

export default app;