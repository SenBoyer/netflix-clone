import { ArrowBackOutlined } from "@mui/icons-material";
import { useLocation, Link } from "react-router-dom";
import "./watch.scss";

export default function Watch() {
  const location = useLocation();

  const { movie } = location.state.movie;

  const { video } = movie;

  return (
    <div className="watch">
      <div className="back">
        <Link to="/">
          <ArrowBackOutlined />
          Home
        </Link>
      </div>
      <video className="video" autoPlay progress controls src={video} />
    </div>
  );
}
