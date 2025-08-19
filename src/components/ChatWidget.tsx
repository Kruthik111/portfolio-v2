import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{text: string, sender: 'user' | 'bot', timestamp: Date}>>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Initial bot message with typing animation
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true);
      setTimeout(() => {
        setMessages([{
          text: "Hello! 👋 I'm Kruthik. How can I help you today?",
          sender: 'bot',
          timestamp: new Date()
        }]);
        setIsTyping(false);
      }, 2000);
    }
  }, [isOpen, messages.length]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage = {
        text: newMessage,
        sender: 'user' as const,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, userMessage]);
      setNewMessage('');
      
      // Simulate bot response
      setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setMessages(prev => [...prev, {
            text: "Thanks for your message! I'll get back to you soon. 😊",
            sender: 'bot',
            timestamp: new Date()
          }]);
          setIsTyping(false);
        }, 1500);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Icon */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="flex items-center justify-center w-full h-full">
          {isOpen ? (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
        </div>
      </motion.button>

      {/* Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ 
              opacity: 0, 
              scale: 0.1, 
              x: 56, 
              y: 56,
              borderRadius: "50%"
            }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              x: 0, 
              y: 0,
              borderRadius: "16px"
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.1, 
              x: 56, 
              y: 56,
              borderRadius: "50%"
            }}
            transition={{ 
              duration: 0.4, 
              ease: [0.25, 0.46, 0.45, 0.94],
              scale: { duration: 0.3 },
              borderRadius: { duration: 0.2 }
            }}
            className="fixed bottom-20 right-20 w-80 h-96 bg-black/90 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl z-40 flex flex-col origin-bottom-right"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">K</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Kruthik S</h3>
                  <p className="text-stone-400 text-xs">Online</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 text-sm relative ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-2xl rounded-br-sm'
                        : 'bg-white/10 text-stone-100 rounded-2xl rounded-bl-sm'
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/10 px-3 py-2 rounded-2xl rounded-bl-sm relative">
                    <div className="flex space-x-1">
                      <motion.div
                        className="w-2 h-2 bg-stone-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-stone-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-stone-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-white/10">
              <div className="flex gap-2 items-center">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type a message..."
                  className="flex-1 max-w-64 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-stone-100 placeholder-stone-400 focus:outline-none focus:border-orange-500 transition-colors duration-200"
                  style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
                />
                <motion.button
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim()}
                  className="w-9 h-9 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed p-1.5 flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
