import axios from "axios";

const BASE = 'appwXqCBC5SIYu96H';
const TABLE = 'Table%201';
const VIEW = 'Grid%20view';


export const FetchTodos = ({pageParam}) => {
  let url = `/${BASE}/${TABLE}/?${VIEW}&pageSize=${2}`;
  console.log('PageParam :', pageParam)
  if (pageParam) 
    url += `&offset=${pageParam}`


  


  return axios.get(url);
}

export const createTodo = (values) => {
  const url = `/${BASE}/${TABLE}/`;
  console.log('Posting value : ', values)
  return axios.post(url, {
    "records": [
      {
        "fields": values
      }
    ]
  })
}
