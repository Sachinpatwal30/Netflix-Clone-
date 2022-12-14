import "./home.scss"
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import { useState, useEffect } from "react"
import axios from "axios";


export default function Home({ type }) {

  const [lists, setLists] = useState([]);
  const [genre, setGenres] = useState(null);

 


  useEffect(() => {
    const getRandomLists = async () => {
      try {

        const res = await axios.get( type? `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`:"lists");
        setLists(res.data);

      } catch (error) {
        console.log(error);
      }
    }
    getRandomLists();
  }, [type, genre])




  return (
    <div className='home'>

      <Navbar />

      <Featured type={type} setGenres={setGenres} />

      {lists.map((list, index) => (
        <List key={index} list={list} />
      ))}

    </div>
  )
}
