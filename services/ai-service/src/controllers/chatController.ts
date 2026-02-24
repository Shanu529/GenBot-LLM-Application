import { error, log } from "console";
import { generate } from "../services/ai.Service.js";

export const llmResponse = async (req: any, res: any) => {
  try {
    const { message, conversationId } = req.body;

    try {

      if(!message || !conversationId){
        return res.status(400).json({message:"all filed are required"})
      }
      const result = await generate(message, conversationId);
      res.json({ reply: result });
    } catch (error) {
      console.log("something went wrong", error);
      
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export default llmResponse;
