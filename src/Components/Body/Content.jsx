import { useContext, useEffect, useState } from "react";
import "./Content.css";
import { ContextData } from "../Store/Context";
import Cards from "../Cards/Cards";
import Defaultcard from "../../Defaultcards/Defaultcard";
import Loader from "../Loader/Loader";

function Content() {
  const { curr } = useContext(ContextData);

  const [list, setlist] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true)
    const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${curr}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "e302348af0msh5f77c5644a30fd0p1c3c25jsnf890c7365f76",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };
   
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {setlist(data.data),
      setLoader(false)});
  }, [curr]);

  return (
    <div className="content-box">
      {loader && <Loader />}

      {list ? (
        <div className="card">
          {
           list.map((item) => <Cards item={item} />)}
        </div>
      ) : (
        <Defaultcard />
      )}
      ;
    </div>
  );
}
export default Content;
