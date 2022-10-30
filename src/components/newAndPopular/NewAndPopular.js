import { useEffect, useState } from "react";
import React from "react";
import "./NewPopular.scss";
import Navbar from "../navbar/Navbar";
import Modal from "./Modal";

export default function NewSection() {
  const [dataSource, setDataSource] = useState([]);
  const [modalInfo, setModalInfo] = useState();
  const [modalActive, setModalActive] = useState(false);

  let APIKEY = "7791a1e44b5f501fce379fea674bd287";

  useEffect(() => {
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}`;
    fetch(url)
      .then((result) => result.json())
      .then((data) => {
        setDataSource(data.results);
      });
  }, []);

  return (
    <div className="popular-wrapper">
      <Navbar />
      {modalActive && (
        <Modal
          modalInfo={modalInfo}
          modalActive={modalActive}
          setModalActive={setModalActive}
        />
      )}
      <div className="new-movie-grid">
        {dataSource.map(
          ({
            poster_path,
            overview,
            backdrop_path,
            vote_average,
            id,
            title,
            release_date,
          }) => (
            <img
              src={`https://image.tmdb.org/t/p/w185/` + poster_path}
              alt="fail"
              onClick={() => {
                setModalInfo({
                  backdrop_path,
                  overview,
                  vote_average,
                  title,
                  release_date,
                  id,
                });
                setModalActive(true);
              }}
            />
          )
        )}
      </div>
    </div>
  );
}
/*******************************
        SAMPLE SEARCH RESULTS DATA
        { "vote_count": 2762, 
            "id": 578, 
            "video": false, 
            "vote_average": 7.5, 
            "title": "Jaws", 
            "popularity": 16.273358, 
            "poster_path": "/l1yltvzILaZcx2jYvc5sEMkM7Eh.jpg", 
            "original_language": "en", 
            "original_title": "Jaws", 
            "genre_ids": [ 27, 53, 12 ], 
            "backdrop_path": "/slkPgAt1IQgxZXNrazEcOzhAK8f.jpg", 
            "adult": false, 
            "overview": "An insatiable great white shark terrorizes the townspeople of Amity Island, The police chief, an oceanographer and a grizzled shark hunter seek to destroy the bloodthirsty beast.", 
            "release_date": "1975-06-18" 
        *******************************/
