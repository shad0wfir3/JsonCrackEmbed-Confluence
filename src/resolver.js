import { storage } from '@forge/api';

export const handler = async (req) => {
  const jsonData = await storage.get('json-data');
  return {
    body: JSON.stringify({ jsonData }),
    headers: {
      'Content-Type': 'application/json'
    }
  };
};
