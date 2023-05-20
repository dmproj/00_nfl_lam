import { useState, useEffect } from "react";
import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import "./featured.scss";
import newRequest from "../../utils/newRequest";

const Featured = ({ type }) => {
  const [content, setContent] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await newRequest.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NjZkMmVkYmY3MjVkYzE0YjUwYjhkYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NDUzNDQxNiwiZXhwIjoxNjg3MTI2NDE2fQ.vnSMTiG8eLt2krMhYEos_RZZz6iprGaZYcEWmiBE8eY",
          },
        });
        setContent(res.data[0]);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    getRandomContent();
  }, [type]);

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
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
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <img src={content?.img} alt="" />
          <div className="info">
            <img src={content.imgTitle} alt="" />
            <span className="desc">{content?.desc}</span>
            <div className="buttons">
              <button className="play">
                <PlayArrow />
                <span>Play</span>
              </button>
              <button className="more">
                <InfoOutlined />
                <span>Info</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
