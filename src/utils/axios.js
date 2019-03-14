// @flow
import axios from 'axios';

export const setTmdbKey = (key: string): void => {
  axios.defaults.params = {};
  axios.defaults.params['api_key'] = key;
};

export const setBaseUrl = (url: string): void => {
  axios.defaults.baseURL = url;
}