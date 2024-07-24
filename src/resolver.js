import { storage } from '@forge/api';

export const handler = async (req) => {
  const jsonData = await storage.get('json-data');
  return {
    jsonData,
  };
};
