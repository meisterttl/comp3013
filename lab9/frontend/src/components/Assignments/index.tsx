import { toggleAssignment, deleteAssignment } from "../../dal";
import { TAssignment } from "../../interfaces";
import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";
import { useMutation } from "@tanstack/react-query";

type Props = {
  assignments: TAssignment[];
};

export function Assignments({ assignments }: Props) {
  const toggleMutation = useMutation({
    mutationFn: toggleAssignment,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteAssignment,
  });

  const completedCount = assignments.filter((a) => a.completed).length;

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>
            {completedCount} of {assignments.length}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {assignments.map((assignment, index) => (
          <Assignment
            id={assignment.id}
            assignment={assignment.task}
            completed={assignment.completed}
            handleDeleteButton={deleteMutation.mutate}
            handleCompletedTask={toggleMutation.mutate}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}
