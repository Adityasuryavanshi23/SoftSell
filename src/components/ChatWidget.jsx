import React, { useState } from "react";

const predefinedAnswers = {
  "how do i sell my license":
    "Just upload your license and get a free valuation.",
  "how long does it take": "The process usually takes 24 to 48 hours.",
  "is it safe to sell software licenses":
    "Yes, we ensure secure and verified transfers.",
  "what license types do you support":
    "We support Windows, Adobe, Office, Antivirus & more.",
  "how do i get paid":
    "We pay via UPI or bank transfer after license verification.",
  hello: "Hello, how can I assist you today?",
  hi: "Hi there! How can I assist you today?",
};

export const ChatWidget = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    const lowerInput = userMessage.toLowerCase();
    const botResponse =
      predefinedAnswers[lowerInput] || "Sorry, I didn't understand that.";

    setMessages([
      ...messages,
      { sender: "user", text: userMessage },
      { sender: "bot", text: botResponse },
    ]);
    setInput("");
  };

  const handleclear = () => {
    setMessages([]);
  };

  return (
    <div className="fixed bottom-32 right-4 max-w-[400px] p-4 z-40 border border-white/20  bg-slate-900 dark:bg-slate-950/50 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-2">
        <p className="b-3 text-lg font-semibold text-white dark:text-white">
          Chat with Bot
        </p>
        {messages.length > 0 && (
          <button
            onClick={handleclear}
            className="bg-red-700 text-white px-4 py-2 text-sm hover:bg-red-800 rounded-lg capitalize"
          >
            clear chat
          </button>
        )}
      </div>

      <div className="h-44 overflow-y-auto space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg max-w-[80%] ${
              msg.sender === "user"
                ? "bg-blue-800 dark:bg-blue-800/50 text-white self-end ml-auto capitalize"
                : "bg-gray-500/20 text-white dark:bg-slate-950/50 dark:text-white capitalize"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex mt-4">
        <input
          type="text"
          className="flex-1 p-2 text-sm border rounded-lg bg-gray-600 text-white outline-none"
          placeholder="Ask how do i sell my license....."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="ml-2 px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};
