//src/App.jsx
import React, { useState } from "react";
import MusicCard from "./MusicCard";
function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [player, setPlayer] = useState(null);
  const albums = [
    {
      id: 1,
      title: "Dark Side of the Moon",
      artist: "Pink Floyd",
      image: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",
      previewUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    {
      id: 2,
      title: "Random Access Memories",
      artist: "Daft Punk",
      image: "https://upload.wikimedia.org/wikipedia/en/2/26/Daft_Punk_-_Random_Access_Memories.png",
      previewUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },
    {
      id: 3,
      title: "Abbey Road",
      artist: "The Beatles",
      image: "https://i.scdn.co/image/ab67616d0000b273dc30583ba717007b00cceb25",
      previewUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    },
    {
      id: 4,
      title: "Thriller",
      artist: "Michael Jackson",
      image: "https://i.scdn.co/image/ab67616d0000b2734121faee8df82c526cbab2be",
      previewUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
    }
  ];
  function handlePlay(song) {
    if (currentSong == song.title) {
      player.pause();
      setCurrentSong(null);
      return;
    }
    if (player) {
      player.pause();
    }
    const newAudio = new Audio(song.previewUrl);
    newAudio.play();
    setPlayer(newAudio);
    setCurrentSong(song.title);
  }
  return (
    <div>
      <h1 className="app-title">SonicDeck</h1>
      {currentSong && (
        <h2 className="now-playing">
          🎵 Now Playing: {currentSong}
        </h2>
      )}
      <div className="music-grid">
        {albums.map((album) => (
          <MusicCard
            key={album.id}
            title={album.title}
            artist={album.artist}
            image={album.image}
            onPlay={() => handlePlay(album)}
            isPlaying={currentSong === album.title}
          />
        ))}
      </div>
    </div>
  );
}

export default App;