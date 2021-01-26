import axios from 'axios';
import config from '../../../config';

export const FETCH_ARTICLES = 'fetch_articles';

export const fetchArticles = source => async dispatch => {
  let url = `${config.backendUrl}fetchArticles`;
  const res = await axios.get(url);
  dispatch({
    type: FETCH_ARTICLES,
    payload: res.data.data
  });
};
