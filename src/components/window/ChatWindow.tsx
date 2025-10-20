import { useState } from "react";
import { X, Send, Paperclip } from "lucide-react";

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ isOpen, onClose }) => {
  const [message, setMessage] = useState("");

  const mockMessages = [
    {
      id: 1,
      sender: "agent",
      text: "Hello! Welcome to PureMolasses. How can I assist you today?",
      time: "10:30 AM",
    },
    {
      id: 2,
      sender: "customer",
      text: "Hi! I'd like to know more about your organic molasses products.",
      time: "10:32 AM",
    },
    {
      id: 3,
      sender: "agent",
      text: "Great! Our organic molasses is locally sourced from Philippine sugarcane farms. We offer different grades and sizes. Are you looking for cooking or health purposes?",
      time: "10:33 AM",
    },
    {
      id: 4,
      sender: "customer",
      text: "For cooking purposes. Do you have bulk options?",
      time: "10:35 AM",
    },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle sending message logic here
      setMessage("");
    }
  };

  const handleFileAttachment = () => {
    // Handle file attachment logic here
    const input = document.createElement("input");
    input.type = "file";
    input.click();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={onClose}
      />

      {/* Chat Window */}
      <div
        className="fixed bottom-0 right-0 z-50 bg-white dark:bg-gray-900 
        shadow-2xl flex flex-col
        w-full h-full
        lg:bottom-0 lg:right-4 lg:w-[350px] lg:h-[500px] lg:rounded-lg 
        border border-amber-100 dark:border-gray-800"
      >
        {/* Header */}
        <div
          className="bg-amber-900 dark:bg-amber-800 text-white p-4 
          flex items-center justify-between lg:rounded-t-lg"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <img
                src="./images/logo/logo.svg"
                alt="Support"
                className="w-8 h-8"
              />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Customer Support</h3>
              <p className="text-xs text-amber-100">We're here to help</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="hover:bg-amber-800 dark:hover:bg-amber-700 
            rounded-lg p-1 transition-colors"
            aria-label="Close chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-amber-50/30 dark:bg-gray-950/30">
          {mockMessages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "customer" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[75%] ${
                  msg.sender === "customer" ? "order-2" : "order-1"
                }`}
              >
                <div
                  className={`rounded-lg p-3 ${
                    msg.sender === "customer"
                      ? "bg-amber-900 text-white dark:bg-amber-800"
                      : "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-amber-100 dark:border-gray-700"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
                <p
                  className={`text-xs text-gray-500 dark:text-gray-400 mt-1 ${
                    msg.sender === "customer" ? "text-right" : "text-left"
                  }`}
                >
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white dark:bg-gray-900 border-t border-amber-100 dark:border-gray-800">
          <div className="flex items-center gap-2">
            {/* Attach button */}
            <button
              onClick={handleFileAttachment}
              className="flex items-center justify-center w-10 h-10 
      text-amber-900 dark:text-amber-100 hover:bg-amber-50 
      dark:hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Attach file"
            >
              <Paperclip className="w-5 h-5" />
            </button>

            {/* Textarea */}
            <div className="flex-1 flex items-center">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                placeholder="Type your message..."
                rows={1}
                className="w-full px-4 py-2 border border-amber-200 
        dark:border-gray-700 rounded-lg resize-none 
        focus:outline-none focus:ring-2 focus:ring-amber-900 
        dark:focus:ring-amber-600 bg-white dark:bg-gray-800 
        text-gray-900 dark:text-gray-100 placeholder-gray-500 
        dark:placeholder-gray-400 leading-relaxed align-middle"
                style={{
                  minHeight: "40px",
                  maxHeight: "100px",
                  lineHeight: "1.5",
                }}
              />
            </div>

            {/* Send button */}
            <button
              onClick={handleSendMessage}
              disabled={!message.trim()}
              className="flex items-center justify-center w-10 h-10 
      bg-amber-900 hover:bg-amber-800 disabled:bg-gray-300 
      dark:bg-amber-700 dark:hover:bg-amber-600 
      dark:disabled:bg-gray-700 text-white rounded-lg 
      transition-colors disabled:cursor-not-allowed"
              aria-label="Send message"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWindow;
