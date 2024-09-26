import { useContext, useEffect, useState } from 'react';
import { ContextData } from '../Components/Store/Context';
import './Defaultcard.css'
import Cards from '../Components/Cards/Cards';
function Defaultcard() {
  const { curr } = useContext(ContextData);

  const [list, setlist] = useState([]);

  useEffect(() => {
    const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=latest`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "e302348af0msh5f77c5644a30fd0p1c3c25jsnf890c7365f76",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => setlist(data.data));
  }, [curr]);

  return (
    <div className='card'>
      {
        list.map(item => (<Cards item={item}/>))
      }
      
    </div>
  );
}

export default Defaultcard;