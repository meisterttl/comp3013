import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useEffect } from "react";
import { useStore } from "./store";

function App() {
  const setTasks = useStore((state) => state.setTasks);
  const setLoadingStatus = useStore((state) => state.setLoadingStatus);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoadingStatus(true);

      const res = await fetch("http://localhost:8000/assignments");
      const data = await res.json();

      setTasks(data);
      setLoadingStatus(false);
    };

    fetchTasks();
  }, []);

  return (
    <>
      <Header />
      <Assignments />
    </>
  );
}

export default App;
