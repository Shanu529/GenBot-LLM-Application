import { generate } from "../services/ai.Service.js";

export const llmResponse = async (req: any, res: any) => {
  try {
    const { message } = req.body;

    const result = await generate(message);

    res.json({ reply: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export default llmResponse;