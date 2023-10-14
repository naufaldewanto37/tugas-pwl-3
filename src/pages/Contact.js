import React from 'react';
import '../App.css';
import ContactForm from '../components/ContactForm';
import { useMessage } from '../MessageContext';

const Contact = () => {
  const { messageCount, setMessageCount } = useMessage();

  const handleNewMessage = () => {
    setMessageCount(messageCount + 1);
  };

  return (
    <div className="contact-form">
      <ContactForm onMessageSubmit={handleNewMessage} />
      <p className="message-count">Messages Sent: {messageCount}</p>
    </div>
  );
};

export default Contact;
