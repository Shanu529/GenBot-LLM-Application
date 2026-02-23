import express from "express";
import { llmResponse } from "../controllers/chatController.js";

const router = express.Router();

router.post("/", llmResponse);

export default router;