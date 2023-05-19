import { useEffect, useState } from "react";
import axios from "axios";

import newRequest from "../../utils/newRequest.js"
import "./home.scss";
import Navbar from "../../components/navbar/Navbar.jsx";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    async function getRandomList() {
      try {
        let url = "lists";
        const params = [];

        if (type) {
          params.push(`type=${type}`);
        }

        if (genre) {
          params.push(`genre=${genre}`);
        }

        if (params.length > 0) {
          const queryString = params.join("&");
          url += `?${queryString}`;
        }

        const res = await newRequest.get(url, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NjZkMmVkYmY3MjVkYzE0YjUwYjhkYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NDQ2MDM4OCwiZXhwIjoxNjg3MDUyMzg4fQ.m5mC3fyZuOebiFWs_NCDZuwJHWs8ycIN7fPxQMR3J9I",
          },
        });

        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
    getRandomList();
  }, [genre, type]);
  return (
    <div className="home">
      <Featured type={type} />
      <List />
    </div>
  );
};

export default Home;

// const url = "lists";
// const params = [];

// if (type) {
//   params.push(`type=${type}`);
// }

// if (genre) {
//   params.push(`genre=${genre}`);
// }

// if (params.length > 0) {
//   const queryString = params.join("&");
//   url += `?${queryString}`;
// }

// const res = await axios.get(url);
