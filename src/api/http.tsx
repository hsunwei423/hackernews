import apiInstance from 'api';

export const getNewStoryIds = () => {
  return apiInstance.get('newstories.json');
}

export const getTopStoryIds = () => {
  return apiInstance.get('topstories.json');
}

export const getBestStoryIds = () => {
  return apiInstance.get('beststories.json');
}

export const getAskStoryIds = () => {
  return apiInstance.get('askstories.json');
}

export const getShowStoryIds = () => {
  return apiInstance.get('showstories.json');
}

export const getJobStoryIds = () => {
  return apiInstance.get('jobstories.json');
}

export const getStories = (storyId: number) => {
  return apiInstance.get(`/item/${storyId}.json`);
}