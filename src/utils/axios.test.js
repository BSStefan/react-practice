// @flow
import axios from 'axios';
import { setTmdbKey, setBaseUrl } from './axios';

it('Should set tmdb key in axios default params', () => {
  const apiKey = '123';
  setTmdbKey(apiKey);
  expect(axios.defaults.params['api_key']).toBe(apiKey)
})

it('Should set baseURL in axios instance', () => {
  const baseUrl = 'http://test123.com';
  setBaseUrl(baseUrl);
  expect(axios.defaults.baseURL).toBe(baseUrl)
})