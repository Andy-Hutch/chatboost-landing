'use client';

import { useState } from 'react';

const ChatbotBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);
  const [userMessage, setUserMessage] = useState('');

  const toggleChat = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleSendMessage = () => {
    if (userMessage.trim()) {
      console.log('Sending message:', userMessage);

      // Add user message to state
      setMessages((prevMessages) => {
        const newMessages = [...prevMessages, { user: userMessage, bot: '' }];
        console.log('Updated messages (user):', newMessages);
        return newMessages;
      });

      setUserMessage(''); // Clear input field after sending message

      // Simulate bot response with a timeout
      setTimeout(() => {
        setMessages((prevMessages) => {
          const newMessages = [
            ...prevMessages,
            { user: '', bot: `Bot: Here's the info for "${userMessage}"!` },
          ];
          console.log('Updated messages (bot):', newMessages);
          return newMessages;
        });
      }, 1000);
    }
  };

  return (
    <div>
      {/* Floating Chatbot Bubble */}
      <div
        className="fixed bottom-6 right-6 bg-blue-500 p-4 rounded-full shadow-xl cursor-pointer z-50"
        onClick={toggleChat}
      >
        <span className="text-white text-3xl">💬</span>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 bg-white shadow-lg rounded-lg w-80 p-4 z-50 max-h-96 overflow-auto">
          <div className="space-y-4">
            {messages.length === 0 ? (
              <div className="text-center text-gray-500">Start chatting...</div>
            ) : (
              messages.map((message, index) => (
                <div key={index} className="flex flex-col space-y-2">
                  {/* Render User's message */}
                  {message.user && (
                    <div className="text-blue-800">
                      <strong>You:</strong> {message.user}
                    </div>
                  )}
                  {/* Render Bot's response */}
                  {message.bot && (
                    <div className="text-gray-800">
                      <strong>Bot:</strong> {message.bot}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Input area */}
          <div className="mt-4 flex space-x-2">
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded text-black"
              placeholder="Type your message..."
              value={userMessage}  // Ensure the input value is controlled
              onChange={(e) => {
                setUserMessage(e.target.value);  // Update state as you type
                console.log('Input change:', e.target.value); // Log input changes for debugging
              }}
              onKeyDown={(e) => {
                console.log('Key pressed:', e.key);  // Log keypress for debugging
                if (e.key === 'Enter') {
                  handleSendMessage(); // Send message on Enter key press
                }
              }}
            />
            <button
              className="bg-blue-500 text-white p-2 rounded"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotBubble;





