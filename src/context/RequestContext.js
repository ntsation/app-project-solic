import React, { createContext, useState } from 'react';

export const RequestContext = createContext();

export const RequestProvider = ({ children }) => {
  const [requests, setRequests] = useState([]);

  // Função para adicionar uma nova solicitação
  const addRequest = (requestData) => {
    const newRequest = {
      ...requestData,
      date: new Date().toISOString(), // Adiciona data e hora da solicitação
      completed: false, // Supondo que a solicitação começa como não concluída
    };
    setRequests((prevRequests) => [...prevRequests, newRequest]);
  };

  return (
    <RequestContext.Provider value={{ requests, setRequests, addRequest }}>
      {children}
    </RequestContext.Provider>
  );
};
