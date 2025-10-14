import { useState } from "react";
import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { BCITAssignment } from "./types";

function App() {
  const [works, setWorks] = useState<BCITAssignment[]>([]);
  const [currentId, setCurrentId] = useState<number>(0);

  const handleAddWork = (text: string) => {
    const nextId = currentId + 1;
    const newWorks = [
      ...works,
      {
        id: currentId,
        text: text,
        isCompleted: false,
      },
    ];

    setCurrentId(nextId);
    setWorks(newWorks);
  };

  const handleCompletedWork = (id: number) => {
    const newWorks = works.map((work) => {
      return id === work.id
        ? {
            ...work,
            isCompleted: !work.isCompleted,
          }
        : work;
    });

    setWorks(newWorks);
  };

  const handleDeleteWork = (id: number) => {
    const newWorks = works.filter((work) => id !== work.id);

    setWorks(newWorks);
  };

  return (
    <>
      <Header onAddWork={handleAddWork} />
      <Assignments
        works={works}
        onCompletedWork={handleCompletedWork}
        onDeleteWork={handleDeleteWork}
      />
    </>
  );
}

export default App;
