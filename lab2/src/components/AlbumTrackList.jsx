import { albums } from "../data";

export const AlbumTrackList = ({ featuredAlbum }) => {
  const albumObj = albums.find((album) => featuredAlbum === album.id);

  return (
    <ol>
      {albumObj.tracks.map((track, index) => (
        <li key={index}>
          <div>
            <span>{track}</span>
            <button className="play-button" aria-label="Play the song"></button>
          </div>
        </li>
      ))}
    </ol>
  );
};
