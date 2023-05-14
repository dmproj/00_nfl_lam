import "./home.scss";
import Navbar from "../../components/navbar/Navbar.jsx";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";


const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured type="series"/>
      <List />
    </div>
  );
};

export default Home;
