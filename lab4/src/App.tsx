import "./App.css";
import Tip from "./Tip";
import TipForm from "./TipForm";
import { useState } from "react";
import type { TTip } from "./types";

function App() {
  const [tips, setTips] = useState<TTip[]>([
    {
      id: "1",
      text: "Get plenty of sleep",
      likes: 0,
    },
    {
      id: "2",
      text: "Go for a walk when you're stumped",
      likes: 0,
    },
  ]);

  // ----- Add Tip-------
  // Needed to generate unique key for each Tip component
  const [currentId, setCurrentId] = useState(tips.length);

  const handleAddTip = (text: string) => {
    console.log("New Tip:", text);
    // This is to avoid creating a new tip with previously used key for deleted tips
    const nextId = currentId + 1;
    const newTips = [
      ...tips,
      {
        id: nextId.toString(),
        text: text,
        likes: 0,
      },
    ];
    setCurrentId(nextId);
    setTips(newTips);
  };

  // ----- Delete Tip-------
  const handleDeleteTip = (id: string) => {
    setTips(tips.filter((tip) => id !== tip.id));
  };

  // ----- Like Tip-------
  const handleLike = (id: string) => {
    const newTips = tips.map((tip) =>
      id === tip.id
        ? {
            ...tip,
            likes: tip.likes + 1,
          }
        : tip
    );
    console.log(tips[0]);
    console.log(newTips[0]);
    setTips(newTips);
  };

  // ----- Dislike Tip-------
  const handleDislike = (id: string) => {
    const newTips = tips.map((tip) =>
      id === tip.id
        ? {
            ...tip,
            likes: tip.likes - 1,
          }
        : tip
    );
    setTips(newTips);
  };

  // ----- Sort Tip-------
  const handleSort = () => {
    const sortTips = [...tips];
    sortTips.sort((a, b) => a.likes - b.likes);
    setTips(sortTips);
  };

  return (
    <div>
      <h1>Dev Tips 👨‍💻</h1>

      <button onClick={handleSort}>Sort</button>

      <TipForm onAddTip={handleAddTip} />

      {tips.map((tip) => (
        <Tip
          onDelete={handleDeleteTip}
          key={tip.id}
          onLike={handleLike}
          onDislike={handleDislike}
          {...tip}
        />
      ))}
    </div>
  );
}

export default App;
