interface MessageBubbleProps {
  role: string;
  text: string;
}

export default function MessageBubble({
  role,
  text
}: MessageBubbleProps) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`
          px-5 py-3 rounded-2xl
          text-sm
          max-w-[80%] sm:max-w-md md:max-w-lg
          shadow-lg
          ${
            isUser
              ? "bg-gradient-to-r from-blue-600 to-blue-400 text-white"
              : "bg-white/10 backdrop-blur-lg border border-white/10 text-white"
          }
        `}
      >
        {text}
      </div>
    </div>
  );
}