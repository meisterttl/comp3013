import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState, useEffect } from "react";
import { TAssignment } from "./interfaces";

function App() {
  const [assignments, setAssignments] = useState<TAssignment[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      setIsLoading(true);
      const res = await fetch("http://localhost:8000/assignments");
      const data = await res.json();

      setAssignments(data);
      setIsLoading(false);
    };

    fetchTasks();
  }, []);

  return (
    <>
      <Header setAssignments={setAssignments} setIsLoading={setIsLoading} />
      <Assignments
        assignments={assignments}
        setAssignments={setAssignments}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </>
  );
}

export default App;
