import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase, trim } from "../../helpers/stringHelpers";
import { useState } from "react";
import { useStore } from "../../store";
import type { TAssignment } from "../../interfaces";

export function Header() {
  const setTasks = useStore((state) => state.setTasks);
  const setLoadingStatus = useStore((state) => state.setLoadingStatus);
  const [assignment, setAssignment] = useState("");

  const handleCreateButton = (e: React.FormEvent) => {
    e.preventDefault();

    fetchPostTasks({
      id: crypto.randomUUID(),
      task: assignment,
      completed: false,
    });
    setAssignment("");
  };

  const fetchPostTasks = async (data: TAssignment) => {
    setLoadingStatus(true);

    const res = await fetch("http://localhost:8000/assignments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const newTasks = await res.json();

    setTasks(newTasks);
    setLoadingStatus(false);
  };

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={handleCreateButton}>
        <input
          placeholder="Add a new assignment"
          type="text"
          value={assignment}
          onChange={(e) => setAssignment(trim(e.target.value))}
        />
        <button type="submit" disabled={!assignment}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
