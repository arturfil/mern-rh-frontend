import { API } from '../../config';

export const getCategories = () => {
  return fetch(
    `${API}/category/categories`,
    {
      method: "GET"
    }
  )
    .then(response => {
      console.log(response);
      return response.json();
    })
    .catch(err => console.log(err));
}

export const createCategory = (category) => {
  
  return fetch(`${API}/category/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(category)
  })
    .then(response => {
      return response.json()
    })
    .catch(err => {
      console.log(err);
    })
}