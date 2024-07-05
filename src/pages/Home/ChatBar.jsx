import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ChatBar.css';
import { Icon } from '@iconify/react';
import sendIcon from '@iconify-icons/fa-solid/paper-plane';

export default function ChatBar() {
  const [chat, setChat] = useState('');
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate(); // Move useNavigate outside the if block

  const handleSubmit = (event) => {
    event.preventDefault();
    setRedirect(true);
  };

  // Handle the redirect after the component renders
  if (redirect) {
    navigate("/chatbot", { state: { chat: chat } });
  }

  return (
    <form onSubmit={handleSubmit} className="chat-bar-form">
      <input
        type="text"
        value={chat}
        onChange={(e) => setChat(e.target.value)}
        placeholder="Ask me any question"
        className="chat-input"
      />
      <button type="submit" className="send-button">
        <Icon icon={sendIcon} />
      </button>
    </form>
  );
}
