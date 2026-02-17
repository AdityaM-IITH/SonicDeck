//src/MusicCard.jsx
import React, { useState } from "react";
function MusicCard(props) {
  const [likes, setLikes] = useState(0);
  function handleLike() {
    setLikes(likes + 1);
  }
  return (
    <div className="music-card">
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.artist}</p>
      <div className="button-container">
        <button
          onClick={handleLike}
        >
          ❤️ {likes} Likes
        </button>
        <button
          onClick={props.onPlay}> {props.isPlaying ? "⏸️ Pause" : "▶ Play"}</button>
      </div>
    </div >
  );
}

export default MusicCard;