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