import React, {useState, useEffect} from 'react';
import Navigation from '../functional/Navigation';
import { getVideogames } from '../services/apiVideogames';

import Card from '../functional/Card';
import './Home.css'

const Home = () => {
  const [videogames, setVideogames] = useState([]);
  const [error, setError] = useState(false);


  const fetchVideogames = () => {
    getVideogames().then(data => {
      try {
        if (data.error) {
          setError(data.error);
        } else {
          setVideogames(data);
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    })
  }

  useEffect(() => {
    fetchVideogames();
  }, [])

  return (
    <>
      <Navigation/>
      <div className="container">
        <h1 className="title">Here are all the videogames</h1>
        <div className="row mt-5">
          {videogames.map((videogame, i) => (
            <div key={i} className="col-4">
              <Card videogame={videogame} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home;