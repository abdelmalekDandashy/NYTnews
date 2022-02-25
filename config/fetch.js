const URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?';
const API_Key = 'OAD0Qz0csaoDZLpw5ZR74TCeSjynnabJ';
const Base_URL = `${URL}&api-key=${API_Key}`;

// const Base_URL = require('./APIS.js');
/* eslint-disable prettier/prettier */
export class Proxy {
  constructor() {
    this.APIBaseUrl = Base_URL;
    this.url = '';
    this.Ticket = '';
    this.TicketMode = 'header';
  }
  api(url) {
    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }
  apiGet(url, data) {
    return fetch(url, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        ticket: this.Ticket,
      },
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data),
    }).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }
  async Get_News_by_Query(query) {
    const result = await this.apiGet(
      Base_URL
    ).then(async resp => {
      return resp;
    });
    return result;
  }
  async Get_More_News(number) {
    const result = await this.apiGet(
      Base_URL+`&page=${number}`
    ).then(async resp => {
      return resp;
    });
    return result;
  }
  async Get_by_search(keyword) {
    const result = await this.apiGet(
      Base_URL+`&q=${keyword}`
    ).then(async resp => {
      return resp;
    });
    return result;
  }
}
