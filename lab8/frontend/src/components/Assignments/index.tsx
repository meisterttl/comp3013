import { CSSProperties } from "react";
import { TAssignment } from "../../interfaces";
import { Assignment } from "../Assignment";
import { GridLoader } from "react-spinners";
import styles from "./assignments.module.css";

const override: CSSProperties = {
  display: "block",
  margin: "12px auto 0",
};

type Props = {
  assignments: TAssignment[];
  setAssignments: React.Dispatch<React.SetStateAction<TAssignment[]>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Assignments({
  assignments,
  setAssignments,
  isLoading,
  setIsLoading,
}: Props) {
  const handleDeleteButton = async (id: number | string) =>
    fetchModifyTask(`/${id}/delete`);

  const handleCompletedTask = (id: number | string, complete: boolean) =>
    fetchModifyTask(`/${id}/toggle?status=${complete}`);

  const countCompletedTasks = () => {
    return assignments.filter((assignment) => assignment.completed).length;
  };

  const fetchModifyTask = async (reqParam: string) => {
    setIsLoading(true);
    const res = await fetch(`http://localhost:8000/assignments${reqParam}`, {
      method: "POST",
    });
    const newTasks = await res.json();

    setAssignments(newTasks);
    setIsLoading(false);
  };

  return (
    <div className={styles.assignments}>
      {!isLoading && (
        <section>
          <header className={styles.header}>
            <div>
              <p>Created Assignments</p>
              <span>{assignments.length}</span>
            </div>

            <div>
              <p className={styles.textPurple}>Completed Assignments</p>
              <span>
                {countCompletedTasks()} of {assignments.length}
              </span>
            </div>
          </header>

          <div className={styles.list}>
            {assignments.map((assignment, index) => (
              <Assignment
                id={assignment.id}
                assignment={assignment.task}
                completed={assignment.completed}
                handleDeleteButton={handleDeleteButton}
                handleCompletedTask={handleCompletedTask}
                key={index}
              />
            ))}
          </div>
        </section>
      )}
      <GridLoader
        loading={isLoading}
        color={"#4ea8de"}
        cssOverride={override}
      />
    </div>
  );
}
