import React from "react";

function Searchbar() {
  const fetchList = async () => {
    response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}`
    );
  };
  return <div>Searchbar</div>;
}

export default Searchbar;
