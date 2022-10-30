import { useEffect, useState } from "react";

export default function GetIMDB() {
  let APIKEY = "7791a1e44b5f501fce379fea674bd287";
  let [dataSource1, setDataSource1] = useState({});
  let [dataSource2, setDataSource2] = useState({});
  let [dataSource3, setDataSource3] = useState({});
  let [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}`;
    fetch(url)
      .then((result) => result.json())
      .then((data) => {
        setDataSource(data.results);
      });
  }, []);

  // let path = "https://image.tmdb.org/t/p/w185/" + dataSource.poster_path;
  // let path2 = "https://image.tmdb.org/t/p/w185/" + dataSource2.poster_path;
  // let path3 = "https://image.tmdb.org/t/p/w185/" + dataSource3.poster_path;

  return (
    <>
      <h1>Using TheMovieDB.org API v3</h1>
      <p>
        {dataSource.map(({ poster_path, overview }) => (
          <>
            <img
              src={`https://image.tmdb.org/t/p/w185/` + poster_path}
              alt="fail"
            />
            <p>{overview}</p>
          </>
        ))}
      </p>
    </>
  );
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
        }
        *******************************/
}
