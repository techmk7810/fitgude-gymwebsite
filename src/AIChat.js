import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");

    const sendMessage = async () => {
        if (!message.trim()) return;

        try {
            const res = await axios.post("http://localhost:8080/chat", { message });
            setResponse(res.data.reply);
        } catch (error) {
            setResponse("Error: Unable to connect to AI.");
        }
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>Gemini AI Chatbot</h2>
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                rows="4"
                cols="50"
            />
            <br />
            <button onClick={sendMessage}>Send</button>
            <h3>Response:</h3>
            <p>{response}</p>
        </div>
    );
};

export default Chatbot;
