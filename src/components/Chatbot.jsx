import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, User, Bot, Minimize2 } from 'lucide-react';
import { useChat } from '../hooks/useChat';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const { messages, isLoading: isTyping, sendMessage } = useChat();
    const messagesEndRef = useRef(null);

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;
        await sendMessage(inputValue);
        setInputValue('');
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (

                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="w-[380px] h-[600px] bg-white dark:bg-tertiary rounded-2xl shadow-2xl dark:shadow-black/50 overflow-hidden border border-gray-200 dark:border-white/10 flex flex-col mb-4 mr-0"
                    >
                        {/* Header */}
                        <div className="bg-white dark:bg-tertiary border-b border-gray-100 dark:border-white/10 p-4 flex justify-between items-center shadow-sm z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black">
                                    <Sparkles size={20} />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-gray-900 dark:text-white">Sreyas AI</h3>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-green-500" />
                                        <span className="text-xs text-gray-500 dark:text-secondary font-medium">Online</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                            >
                                <Minimize2 size={18} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-gray-50/50 dark:bg-black-100/50 scroll-smooth">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`flex items-start gap-2 max-w-[85%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                        {/* Avatar */}
                                        <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-1 ${msg.sender === 'user' ? 'bg-gray-900 text-white dark:bg-white dark:text-black' : 'bg-white border border-gray-200 text-purple-600 dark:bg-tertiary dark:border-white/10 dark:text-white'
                                            }`}>
                                            {msg.sender === 'user' ? <User size={12} /> : <Bot size={14} />}
                                        </div>

                                        {/* Bubble */}
                                        <div
                                            className={`p-3.5 text-sm leading-relaxed rounded-2xl shadow-sm ${msg.sender === 'user'
                                                ? 'bg-black text-white rounded-tr-none dark:bg-white dark:text-black'
                                                : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none dark:bg-tertiary dark:border-white/10 dark:text-white'
                                                }`}
                                        >
                                            {msg.text}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="flex items-start gap-2 max-w-[85%]">
                                        <div className="w-6 h-6 rounded-full bg-white border border-gray-200 text-purple-600 dark:bg-tertiary dark:border-white/10 dark:text-white flex items-center justify-center mt-1">
                                            <Bot size={14} />
                                        </div>
                                        <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1 items-center h-10 dark:bg-tertiary dark:border-white/10">
                                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white dark:bg-tertiary border-t border-gray-100 dark:border-white/10">
                            <form
                                onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
                                className="relative flex items-center"
                            >
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Ask me anything..."
                                    className="w-full bg-gray-100 text-gray-900 dark:bg-black-100 dark:text-white rounded-full pl-5 pr-12 py-3.5 focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/20 focus:bg-white dark:focus:bg-black-200 transition-all placeholder:text-gray-400 dark:placeholder:text-secondary text-sm font-medium"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim()}
                                    className="absolute right-2 p-2 bg-black text-white rounded-full hover:bg-gray-800 disabled:opacity-50 disabled:hover:bg-black dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-all"
                                >
                                    <Send size={16} />
                                </button>
                            </form>
                            <div className="text-center mt-2">
                                <span className="text-[10px] text-gray-300 dark:text-gray-600 font-medium">Powered by Sreyas AI</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-black text-white dark:bg-white dark:text-black rounded-full shadow-2xl dark:shadow-white/20 flex items-center justify-center hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
            </motion.button>
        </div>
    );
};

export default Chatbot;
