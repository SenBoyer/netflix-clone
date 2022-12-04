import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@mui/icons-material";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../contextApi";
import axios from "axios";

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  const { token } = useContext(userContext);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(
          "https://reeeeee.tk/api/movies/find/" + item,
          {
            headers: {
              token: `Bearer ${token}`,
            },
          }
        );
        setMovie(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, [item]);

  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf";

  const params = { movie: { movie } };

  return (
    <Link to="/netflix-clone-front/watch" state={params}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 175 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie.imgSmall} alt="" />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">{movie.ageLimit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
