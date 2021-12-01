import axios from 'axios'

export const baseURL: string = 'https://hacker-news.firebaseio.com/v0';
export const newstoriesURL: string = `${baseURL}/newstories.json`;
export const topstoriesURL: string = `${baseURL}/topstories.json`;
export const beststoriesURL: string = `${baseURL}/beststories.json`;

export const askstoriesURL: string = `${baseURL}/askstories.json`;
export const showstoriestoriesURL: string = `${baseURL}/showstories.json`;
export const jobstoriesURL: string = `${baseURL}/jobstories.json`;

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