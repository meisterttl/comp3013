import { albums } from "../data";

export const AlbumCover = ({ featuredAlbum }) => {
  const albumObj = albums.find((album) => featuredAlbum === album.id);

  return (
    <div className="album-cover">
      <figure>
        <img
          src={albumObj.coverImg}
          alt={`Album cover for ${albumObj.title}`}
          width={300}
          height={300}
        />
        <figcaption>{albumObj.name}</figcaption>
      </figure>
    </div>
  );
};
