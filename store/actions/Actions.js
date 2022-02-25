export const getNews = (NEWS) => ({

  type: 'GET_NEWS',
  payload: NEWS,
});
export const getMoreNews = (NEWS) => ({

  type: 'GET_MORE_NEWS',
  payload: NEWS,
});
export const getSearch = (NEWS) => ({
  type: 'GET_SEARCH_DATA',
  payload: NEWS,
});
export const ClearSearch = (NEWS) => ({
  type: 'CLEAR_SEARCH_DATA',
  payload: NEWS,
});
