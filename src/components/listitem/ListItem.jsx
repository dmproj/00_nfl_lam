import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./listitem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@mui/icons-material";
import newRequest from "../../utils/newRequest";

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState(null);


  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await newRequest.get("/movies/find/" + item, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NjZkMmVkYmY3MjVkYzE0YjUwYjhkYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NDUzNDQxNiwiZXhwIjoxNjg3MTI2NDE2fQ.vnSMTiG8eLt2krMhYEos_RZZz6iprGaZYcEWmiBE8eY",
          },
        });
        setMovie(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (item) {
      getMovie();
    }
  }, [item]);

  return (
    <Link to="/watch" state={{ movie: movie }}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie?.img} alt="" />
        {isHovered && (
          <>
            <video src={movie?.trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie?.duration}</span>
                <span className="limit">+{movie?.linit}</span>
                <span>{movie?.year}</span>
              </div>
              <div className="desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium hic
                rem eveniet error possimus, neque ex doloribus.
              </div>
              <div className="genre">Action</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
