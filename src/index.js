import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { setTmdbKey, setBaseUrl } from './utils/axios';
import { TMDB_URL } from './utils/url';

setBaseUrl(TMDB_URL);
setTmdbKey(process.env.REACT_APP_TMDB_KEY);

ReactDOM.render(<App />, document.getElementById('root'));
