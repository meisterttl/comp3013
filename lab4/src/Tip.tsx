import type { TTip } from "./types";

type Props = TTip & {
  onDelete: (id: string) => void;
  onLike: (id: string) => void;
  onDislike: (id: string) => void;
};

export default function Tip(props: Props) {
  const handleLike = () => {
    console.log(`👍 ID: ${props.id} clicked`);
    props.onLike(props.id);
  };

  const handleDislike = () => {
    console.log(`👎 ID: ${props.id} clicked`);
    props.onDislike(props.id);
  };

  const handleDelete = () => {
    console.log(`🗑️ ID: ${props.id} clicked`);
    props.onDelete(props.id);
  };

  return (
    <div className="tip-card">
      <p>{props.text}</p>
      <p>Likes: {props.likes}</p>
      <button onClick={handleLike}>👍</button>
      <button onClick={handleDislike}>👎</button>
      <button onClick={handleDelete}>🗑️</button>
    </div>
  );
}
