import { useState } from "react";

import "./home.scss";
import Navbar from "../../components/navbar/Navbar.jsx";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  return (
    <div className="home">
      <Featured type={type} />
      <List />
    </div>
  );
};

export default Home;
