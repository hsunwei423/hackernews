import axios from 'axios'

export const baseURL = 'https://hacker-news.firebaseio.com/v0';
export const newstoriesURL = `${baseURL}/newstories.json`;
export const topstoriesURL = `${baseURL}/topstories.json`;
export const beststoriesURL = `${baseURL}/beststories.json`;

export const askstoriesURL = `${baseURL}/askstories.json`;
export const showstoriestoriesURL = `${baseURL}/showstories.json`;
export const jobstoriesURL = `${baseURL}/jobstories.json`;

export const getNewStoryIds = async () => {
    return await axios
        .get(newstoriesURL)
}

export const getTopStoryIds = async () => {
    return await axios.get(topstoriesURL)
}

export const getBestStoryIds = async () => {
    return await axios.get(beststoriesURL);
}

export const getAskStoryIds = async () => {
    return await axios.get(askstoriesURL);
}

export const getShowStoryIds = async () => {
    return await axios.get(showstoriestoriesURL);
}

export const getJobStoryIds = async () => {
    return await axios.get(jobstoriesURL);
}

export const getStories = async (storyId: number) => {
    return await axios
        .get(`${baseURL}/item/${storyId}.json`)
}