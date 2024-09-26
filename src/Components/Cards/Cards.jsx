import { useEffect, useState } from "react";
import "./Cards.css";

function Cards({ item }) {

  const [btn , setBtn] = useState('play')

  const [playing, setPlaying] = useState(false)

  const song = new Audio(item.preview)

  useEffect(()=>{

    playing ? song.play() : song.pause();

  },[playing])
  

  const clickHandler = ()=>{
    
    if(btn == 'play'){
      setBtn('pause')
      setPlaying(true)
      
    }
    else{
      setBtn('play')
      setPlaying(false)
    }
    song.pause()
    
    

  
  }


  return (
    <> 
      <div className="card-container">
        <div className="Main-card">
          <div className="images">
         <img src={ item.album.cover_big} alt="" />
          </div>
          <div className="details">
            <h5 className="index-title">song: {item.title}</h5>
            <h5 className="index-artist-name">Artist: {item.artist.name}</h5>
          </div>
          <div className="overlay">
            <h5 className="title">song: {item.title}</h5>
            <h5 className="artist-name">Artist: {item.artist.name}</h5>
            <img className="artist-img" src={item.artist.picture_big} alt="" />
          </div>
        
            <i onClick={clickHandler}  className={`fa-solid fa-circle-${btn} play-btn`}></i>

          <audio className="audio" src={item.preview} ></audio>
        </div>
      </div>
    </>
  );
}

export default Cards;
