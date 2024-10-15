import { useContext, useState } from 'react';
import { RequestContext } from '../context/RequestContext';

export const useRequests = () => {
  const { requests, setRequests } = useContext(RequestContext);
  const [error, setError] = useState(null);

  const addRequest = (service, description) => {
    if (!service || !description) {
      setError('Preencha todos os campos.');
      return;
    }
    const newRequest = { service, description, status: 'Pendente' };
    setRequests([...requests, newRequest]);
  };

  const removeRequest = (index) => {
    setRequests(requests.filter((_, i) => i !== index));
  };

  const updateRequest = (index, updatedRequest) => {
    const newRequests = [...requests];
    newRequests[index] = updatedRequest;
    setRequests(newRequests);
  };

  return { requests, addRequest, removeRequest, updateRequest, error };
};
