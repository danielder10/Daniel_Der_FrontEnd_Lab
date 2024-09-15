import { useState } from 'react';
import './App.css';

const artist = {
  name: 'KISS OF LIFE',
  image: 'https://i.scdn.co/image/ab67616d0000b2732ff7c76b0790cd3ad63cfc0c', 
  albums: [
    {
      title: 'MIDAS TOUCH',
      tracks: ['Midas Touch', 'Nothing'],
    },
    {
      title: 'KISS OF LIFE',
      tracks: ['Shhh', 'Bye My Neverland', 'SugarCoat', 'Countdown', 'Kitty Cat', 'Play Love Games'],
    },
  ],
};

function App() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const handleAlbumClick = (album) => {
    setSelectedAlbum(selectedAlbum === album ? null : album);
  };

  return (
    <div className="App">
      <h1>{artist.name} Discography</h1>
      <img src={artist.image} alt={artist.name} />
      <h2>Albums</h2>
      <ul>
        {artist.albums.map((album, index) => (
          <li key={index}>
            <h3 onClick={() => handleAlbumClick(album)}>{album.title}</h3>
            {selectedAlbum === album && (
              <ul>
                {album.tracks.map((track, index) => (
                  <li key={index}>{track}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
