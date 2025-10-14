import { Assignment } from "../Assignment";
import type { BCITAssignment } from "../../types";
import styles from "./assignments.module.css";

type Props = {
  works: BCITAssignment[];
  onCompletedWork: (id: number) => void;
  onDeleteWork: (id: number) => void;
};

export function Assignments(props: Props) {
  const worksArray = props.works;
  const totalNumWorks = worksArray.length;
  const completedNumWorks = worksArray.filter(
    (work) => work.isCompleted
  ).length;

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{totalNumWorks}</span>
        </div>

        {/* Hiding it when there is no assignment */}
        {0 !== totalNumWorks && (
          <div>
            <p className={styles.textPurple}>Completed Assignments</p>
            <span>{`${completedNumWorks} of ${totalNumWorks}`}</span>
          </div>
        )}
      </header>

      <div className={styles.list}>
        {worksArray &&
          worksArray.map((work) => (
            <Assignment
              key={work.id}
              onCompletedWork={props.onCompletedWork}
              onDeleteWork={props.onDeleteWork}
              {...work}
            />
          ))}
      </div>
    </section>
  );
}
