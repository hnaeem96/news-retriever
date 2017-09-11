import axios from 'axios';

export const GET_NEWS = 'GET_NEWS';
export const GET_NEWS_DETAILS = 'GET_NEWS_DETAILS';
export const GET_SAVED_NEWS = 'GET_SAVED_NEWS';
export const POST_SAVED_NEWS = 'POST_SAVED_NEWS';
export const CHECK_SAVED_NEWS = 'CHECK_SAVED_NEWS';
export const REMOVE_FROM_SAVED = 'REMOVE_FROM_SAVED';
export const GET_FAVORITE_NEWS = 'GET_FAVORITE_NEWS';
export const POST_FAVORITE_NEWS = 'POST_FAVORITE_NEWS';
export const CHECK_FAVORITE_NEWS = 'CHECK_FAVORITE_NEWS';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

const ROOT_URL = '/api';

export function getNews() {
  const request = axios.get(`${ROOT_URL}/news`);
  return {
    type: GET_NEWS,
    payload: request
  };
}

export function getNewsDetails(id) {
  const request = axios.get(`${ROOT_URL}/news`);
  return {
    type: GET_NEWS_DETAILS,
    payload: request
  }
}

export function getSavedNews() {
  const request = axios.get(`${ROOT_URL}/saved`);
  return {
    type: GET_SAVED_NEWS,
    payload: request
  }
}

export function saveNewsToDatabase(article) {
  const request = axios.post(`${ROOT_URL}/saved`, article);
  return {
    type: POST_SAVED_NEWS,
    payload: request
  }
}

export function checkInSaved(article) {
  const request = axios.post(`${ROOT_URL}/saved/check`, article);
  return {
    type: CHECK_SAVED_NEWS,
    payload: request
  }
}

export function removeFromSaved(article) {
  const request = axios.post(`${ROOT_URL}/saved/delete`, article);
  return {
    type: REMOVE_FROM_SAVED,
    payload: request
  }
}

export function getFavoritedNews() {
  const request = axios.get(`${ROOT_URL}/favorites`);
  return {
    type: GET_FAVORITE_NEWS,
    payload: request
  }
}

export function saveToFavorites(article) {
  const request = axios.post(`${ROOT_URL}/favorites`, article);
  return {
    type: POST_FAVORITE_NEWS,
    payload: request
  }
}

export function checkInFavorites(article) {
  const request = axios.post(`${ROOT_URL}/favorites/check`, article);
  return {
    type: CHECK_FAVORITE_NEWS,
    payload: request
  }
}

export function removeFromFavorites(article) {
  const request = axios.post(`${ROOT_URL}/favorites/delete`, article);
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: request
  }
}
