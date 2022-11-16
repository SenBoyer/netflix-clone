// import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import PlayArrow from "@mui/icons-material/PlayArrow";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import "./featured.scss";
import { useState, useEffect, useContext } from "react";
import { userContext } from "../../contextApi";
import axios from "axios";

export default function Featured({ type, lists, setLists, listCopy }) {
  const [content, setContent] = useState({});
  const { token, setIsMobile, isMobile } = useContext(userContext);

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(
          `/featured/random${type ? "?type=" + type : ""}`,
          {
            headers: {
              token: `Bearer ${token}`,
            },
          }
        );
        setContent(res.data[0]);
      } catch (err) {
        console.log("error= ", err);
      }
    };
    getRandomContent();
  }, [type]);

  const changeSelection = (event) => {
    if (event.target.value.toLowerCase() === "genre") {
      setLists(listCopy);
    } else {
      let filteredList = listCopy.filter((list) => {
        return list.title.toLowerCase() === event.target.value.toLowerCase();
      });
      setLists(filteredList);
    }
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  return (
    <>
      <div className="featured">
        {type && (
          <div className="category">
            <span>{type === "movie" ? "Movies" : "Series"}</span>
            <select name="genre" id="genre" onChange={changeSelection}>
              <option>Genre</option>
              <option value="adventure">Adventure</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="fantasy">Fantasy</option>
              <option value="historical">Historical</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-fi</option>
              <option value="thriller">Thriller</option>
              <option value="western">Western</option>
              <option value="animation">Animation</option>
              <option value="drama">Drama</option>
              <option value="documentary">Documentary</option>
            </select>
          </div>
        )}
        {isMobile && <img src={content.mobileCover} alt="" />}
        {!isMobile && <img src={content.img} alt="" />}
        <div className="info">
          <img src={content.imgTitle} alt={content.title} />
          {/* <span className="desc">{dataSource.overview}</span> */}
          <span className="desc">{content.desc}</span>
          <div className="buttons">
            <button className="play">
              <PlayArrow style={{ color: "black" }} />
              <span style={{ color: "black" }}>Play</span>
            </button>
            <button className="more">
              <InfoOutlined />
              <span>Info</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
