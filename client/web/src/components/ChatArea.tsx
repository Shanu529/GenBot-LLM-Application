import { useEffect, useRef, useState } from "react";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";

interface ChatAreaProps {
  setOpen: (value: boolean) => void;
}

export default function ChatArea({ setOpen }: ChatAreaProps) {
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([
    { role: "LLM", text: "Your intelligent companion " },
  ]);

  const [loading, setLoading] = useState(false);

  
  const bottomRef = useRef<HTMLDivElement | null> (null);

  useEffect(()=>{

    bottomRef.current?.scrollIntoView({behavior:"smooth"});
  }, [loading, messages])

  return (
    <div className="flex flex-col flex-1 h-full">
      <div className="flex items-center gap-4 p-4 border-b border-white/10 bg-black backdrop-blur-xl">
        <button className="md:hidden text-xl" onClick={() => setOpen(true)}>
          ☰
        </button>

        <h1 className="text-lg font-semibold">New Chat</h1>
      </div>

      <div className="flex-1 overflow-y-auto px-4 md:px-20 py-6 space-y-6">
        {messages.map((msg, index) => (
          <MessageBubble key={index} role={msg.role} text={msg.text} />
        ))}

        {loading && <MessageBubble role="LLM" text="Typing..." />}
         <div ref={bottomRef}></div>
      </div>

      <ChatInput setMessages={setMessages}  setLoading={setLoading} />
    </div>
  );
}
