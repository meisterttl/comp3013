import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";
import type { BCITAssignment } from "../../types";

type Props = BCITAssignment & {
  onCompletedWork: (id: number) => void;
  onDeleteWork: (id: number) => void;
};

export function Assignment(props: Props) {
  const handleCompletedWork = () => {
    props.onCompletedWork(props.id);
  };

  const handleDeleteWork = () => {
    props.onDeleteWork(props.id);
  };

  const workIconStyle = props.isCompleted ? <BsFillCheckCircleFill /> : <div />;
  const workTextStyle = !props.isCompleted ? "" : styles.textCompleted;

  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={handleCompletedWork}>
        {workIconStyle}
      </button>

      <p className={workTextStyle}>{props.text}</p>

      <button className={styles.deleteButton} onClick={handleDeleteWork}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
