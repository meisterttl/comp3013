import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { trim } from "../../helpers/stringHelpers";
import { useState } from "react";
import { createAssignment } from "../../dal";
import { useMutation } from "@tanstack/react-query";

export function Header() {
  const [assignment, setAssignment] = useState("");

  const createMutation = useMutation({
    mutationFn: createAssignment,
  });

  const handleCreateButton = async (e: React.FormEvent) => {
    e.preventDefault();
    createMutation.mutate(assignment);
    setAssignment("");
  };

  return (
    <header className={styles.header}>
      <h1>BCIT Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={handleCreateButton}>
        <input
          placeholder="Add a new assignment"
          type="text"
          value={assignment}
          onChange={(e) => setAssignment(trim(e.target.value))}
        />
        <button
          type="submit"
          disabled={!assignment || createMutation.isPending}
        >
          {createMutation.isPending ? "Adding..." : "Create"}
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
