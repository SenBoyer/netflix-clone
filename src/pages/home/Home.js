import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import { useState, useContext } from "react";
import { useEffect } from "react";
import { userContext } from "../../contextApi";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  const [listCopy, setListCopy] = useState([]);
  const { token } = useContext(userContext);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const response = await axios.get(
          `/lists${type ? "?type=" + type : ""}${
            genre ? "?genre=" + genre : ""
          }`,
          {
            headers: {
              token: `Bearer ${token}`,
            },
          }
        );
        setLists(response.data);
        setListCopy(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [genre, type]);

  return (
    <div className="home">
      <Navbar />
      <Featured
        type={type}
        lists={lists}
        setLists={setLists}
        listCopy={listCopy}
      />
      {lists &&
        lists.map((list) => {
          if (list.content.length > 0) {
            return <List list={list} />;
          }
        })}
    </div>
  );
};

export default Home;
