import React, { createContext, useState, useContext } from 'react';

export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [messageCount, setMessageCount] = useState(0);

  return (
    <MessageContext.Provider value={{ messageCount, setMessageCount }}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessage = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error('useMessage must be used within a MessageProvider');
  }
  return context;
};
