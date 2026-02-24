import { useState } from "react";
import axios from "axios";

interface ChatInputProps {
  setMessages: React.Dispatch<
    React.SetStateAction<{ role: string; text: string }[]>
  >;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const backendAPI = import.meta.env.VITE_BACKEND_URL;
export default function ChatInput({ setMessages, setLoading }: ChatInputProps) {
  const [input, setInput] = useState("");

  // const [conversationId] = useState<string>(() => crypto.randomUUID());
  const generateId = () => {
    return "id-" + Date.now() + "-" + Math.random().toString(36).substring(2);
  };

  const [conversationId] = useState<string>(() => generateId());

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text: input }]);
    setInput("");

    setLoading(true);
    try {
      console.log("endpointer enter..");

      const res = await axios.post(`${backendAPI}/chat`, {
        message: input,
        conversationId: conversationId,
      });
      console.log("here is response from  LLM : ", res.data.reply);
      setMessages((prev) => [
        ...prev,
        {
          role: "LLM",
          text: res.data.reply,
        },
      ]);
    } catch (error) {
      console.log("api error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 md:p-6">
      <div className="flex items-center bg-black backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 shadow-lg">
        <input
          className="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
          placeholder="Type something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSend();
            }
          }}
        />

        <button
          onClick={handleSend}
          className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-full transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}
