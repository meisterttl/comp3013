import { albums } from "../data";

export const AlbumListSelector = ({ featuredAlbum, setFeaturedAlbum }) => {
  return (
    <div className="album-lists">
      {albums.map((album) => (
        <button
          key={album.id}
          className={featuredAlbum === album.id ? "active" : ""}
          onClick={() => setFeaturedAlbum(album.id)}
        >
          <figure>
            <img
              src={album.coverImg}
              alt={`Album cover for ${album.name}`}
              width={100}
              height={100}
            />
            <figcaption>{album.name}</figcaption>
          </figure>
        </button>
      ))}
    </div>
  );
};
