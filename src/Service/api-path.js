import axios from 'axios';

const API_URL = 'http://localhost:5656';

export const getMastercategory = () => axios.get(`${API_URL}/api/get/mastercat`);
