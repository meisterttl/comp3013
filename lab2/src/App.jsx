import "./App.css";
import { useState } from "react";
import { AlbumCover } from "./components/AlbumCover";
import { AlbumListSelector } from "./components/AlbumListSelector";
import { AlbumTrackList } from "./components/AlbumTrackList";

const LeftColumn = ({ featuredAlbum, setFeaturedAlbum }) => {
  return (
    <div className="column left">
      <AlbumCover featuredAlbum={featuredAlbum} />
      <AlbumListSelector
        featuredAlbum={featuredAlbum}
        setFeaturedAlbum={setFeaturedAlbum}
      />
    </div>
  );
};

const RightColumn = ({ featuredAlbum }) => {
  return (
    <div className="column right">
      <AlbumTrackList featuredAlbum={featuredAlbum} />
    </div>
  );
};

function App() {
  const [featuredAlbum, setFeaturedAlbum] = useState(0);

  return (
    <div className="row">
      <LeftColumn
        featuredAlbum={featuredAlbum}
        setFeaturedAlbum={setFeaturedAlbum}
      />
      <RightColumn
        featuredAlbum={featuredAlbum}
        setFeaturedAlbum={setFeaturedAlbum}
      />
    </div>
  );
}

export default App;
