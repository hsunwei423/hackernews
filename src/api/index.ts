import axios from 'axios';

const baseURL: string = 'https://hacker-news.firebaseio.com/v0';

const apiInstance = axios.create({
  baseURL: baseURL
});

export default apiInstance;
