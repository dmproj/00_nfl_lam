import { ArrowBackOutlined } from "@mui/icons-material";
import "./watch.scss";
import { Link, useLocation } from "react-router-dom";

const Watch = () => {
  const location = useLocation();
  const movie = location.state ? location.state.movie : null;

  if (!movie) {
    // Render a loading state or handle the case where movie is not available
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="watch">
        <Link to="/">
          <div className="back">
            <ArrowBackOutlined />
            Home
          </div>
        </Link>
      </div>
      <video src={movie.video} autoPlay={true} loop controls />
    </>
  );
};

export default Watch;
