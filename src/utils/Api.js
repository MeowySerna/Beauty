import { apiConfig } from "./constants";

class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getProducts() {
    return fetch(this._baseUrl, {
      headers: this._headers,
    }).then((res) => this._handlingServerResponse(res));
  }

  _handlingServerResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`код ошибки: ${res.status}`);
    }
  }
}

const api = new Api(apiConfig);

export default api;