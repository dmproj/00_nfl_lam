import { ArrowBackOutlined } from "@mui/icons-material";
import "./watch.scss";

const Watch = () => {
  const trailer = "https://samplelib.com/lib/preview/mp4/sample-5s.mp4";
  return (
    <>
      <div className="watch">
        <ArrowBackOutlined className="back"/>
        Home
      </div>
      <video src={trailer} autoPlay={true} loop controls/>
    </>
  );
};

export default Watch;
