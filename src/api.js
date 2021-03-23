import axios from "axios";

const BASE = 'appwXqCBC5SIYu96H';
const TABLE = 'Table%201';
const VIEW = 'Grid%20view';


export const FetchTodos = key => {
  let url = `/${BASE}/${TABLE}/?${VIEW}`;
  return axios.get(url);
}
