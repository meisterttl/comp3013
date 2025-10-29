import { useStore } from "../../store";
import { CSSProperties } from "react";
import { Assignment } from "../Assignment";
import { GridLoader } from "react-spinners";
import styles from "./assignments.module.css";

const override: CSSProperties = {
  display: "block",
  margin: "12px auto 0",
};

export function Assignments() {
  const assignments = useStore((state) => state.assignments);
  const setTasks = useStore((state) => state.setTasks);
  const isLoading = useStore((state) => state.isLoading);
  const setLoadingStatus = useStore((state) => state.setLoadingStatus);

  const handleDeleteButton = async (id: number | string) =>
    fetchModifyTask(`/${id}/delete`);

  const handleCompletedTask = (id: number | string, complete: boolean) =>
    fetchModifyTask(`/${id}/toggle?status=${complete}`);

  const countCompletedTasks = () => {
    return assignments.filter((assignment) => assignment.completed).length;
  };

  const fetchModifyTask = async (reqParam: string) => {
    setLoadingStatus(true);
    const res = await fetch(`http://localhost:8000/assignments${reqParam}`, {
      method: "POST",
    });
    const newTasks = await res.json();

    setTasks(newTasks);
    setLoadingStatus(false);
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
        color={"#ffffff"}
        cssOverride={override}
      />
    </div>
  );
}
