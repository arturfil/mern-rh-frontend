import { API } from '../../config';

export const getVideogames = () => {
  return fetch(
    `${API}/videogame/videogames`,
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

export const createVideogame = (userId, token, videogame) => {
  return fetch(`${API}/videogame/create`, {
    method: "POST",
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: videogame
  })
    .then(response => {
      return response.json()
    })
    .catch(err => {
      console.log(err);
    })
}