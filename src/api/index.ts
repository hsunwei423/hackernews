import axios from 'axios';

const baseURL = 'https://hacker-news.firebaseio.com/v0';

const apiInstance = axios.create({
  baseURL: baseURL,
});

export default apiInstance;
