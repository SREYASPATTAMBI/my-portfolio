import { useState } from 'react';
import { SYSTEM_PROMPT } from '../data/persona';

export const useChat = () => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hey! I'm Sreyas. Ask me about my projects, tech stack, or anything else! 👋",
            sender: 'bot'
        }
    ]);
    const [isLoading, setIsLoading] = useState(false);

    const callLLM = async (userMessage) => {
        const apiKey = import.meta.env.VITE_GROQ_API_KEY;

        if (!apiKey || apiKey === "your_api_key_here") {
            return "I'm ready to chat, but I need my API Key! Please add your Groq API Key to the .env file.";
        }

        try {
            const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: "llama-3.1-8b-instant",
                    messages: [
                        { role: "system", content: SYSTEM_PROMPT },
                        // Pass recent conversation history (optional, currently just sending system + new msg for simplicity/context window)
                        // Ideally we'd map 'messages' state to the API format here
                        { role: "user", content: userMessage }
                    ],
                    temperature: 0.7,
                    max_tokens: 1024,
                })
            });

            const data = await response.json();

            if (data.error) {
                console.error("API Error:", data.error);
                throw new Error(data.error.message || "API Error");
            }

            return data.choices[0]?.message?.content || "No response from AI.";

        } catch (error) {
            console.error("Fetch error:", error);
            throw error;
        }
    };

    const sendMessage = async (text) => {
        if (!text.trim()) return;

        const userMsg = { id: Date.now(), text, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setIsLoading(true);

        try {
            const responseText = await callLLM(text);
            const botMsg = { id: Date.now() + 1, text: responseText, sender: 'bot' };
            setMessages(prev => [...prev, botMsg]);
        } catch (error) {
            let errorText = "My brain is offline. Check the console for errors.";
            if (error.message.includes("API Key")) {
                errorText = "Please set your VITE_GROQ_API_KEY in the .env file!";
            }
            setMessages(prev => [...prev, { id: Date.now() + 1, text: errorText, sender: 'bot', isError: true }]);
        } finally {
            setIsLoading(false);
        }
    };

    return { messages, isLoading, sendMessage };
};
