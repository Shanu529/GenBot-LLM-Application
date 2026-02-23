import { useState } from "react";

interface ChatInputProps {
  setMessages: React.Dispatch<
    React.SetStateAction<{ role: string; text: string }[]>
  >;
}

export default function ChatInput({ setMessages }: ChatInputProps) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text: input }]);

    setInput("");
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
