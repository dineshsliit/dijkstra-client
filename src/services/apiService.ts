import axios from 'axios';

const baseURL = 'https://localhost:7270/api';

export interface ShortestPathData {
  nodeNames: string[];
  distance: number;
}

export const getShortestPath = async (fromNode: string, toNode: string): Promise<ShortestPathData> => {
  const response = await axios.get<ShortestPathData>(`${baseURL}/ShortestPaths/${fromNode}/${toNode}`);
  console.log(response.data);
  return response.data;
};

export const getNodes = async (): Promise<string[]> => {
  try {
    const response = await axios.get<string[]>(`${baseURL}/Nodes/GetNodes`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching nodes', error);
    throw error;
  }
};

