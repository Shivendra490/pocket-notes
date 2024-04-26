import { useState } from "react";
import Modal from "../../UI/Modal";
import styles from "./CreateGroup.module.css";
import { setPocketDb } from "../../utility/localStorage";

const CreateGroup = (props) => {
  const [groupName, setGroupName] = useState("");
  const [bgColor, setBgColor] = useState("");

  const createGroupHandler = () => {
    if (!groupName.trim() || !bgColor) {
      return;
    }
    const groupId = new Date().getTime().toString();
    const group = {
      groupId: groupId,
      groupName: groupName.trim(),
      bgColor: bgColor,
      notes: [],
    };
    setPocketDb(group);
    props.onUpdateGroupList();
    setGroupName("");
    setBgColor("");
    props.onHideModal();
  };
  return (
    <Modal onHideModal={props.onHideModal}>
      <div className={styles.createGroupWrapper}>
        <h2 className={styles.heading}>Create new Group</h2>
        <div className={styles.nameFieldWrapper}>
          <label className={styles.groupName}>Group Name</label>
          <input
            type="text"
            className={styles.input}
            placeholder="Enter group name"
            onChange={(e) => setGroupName(e.target.value)}
          />
        </div>
        <div className={styles.colorFieldWrapper}>
          <label className={styles.chooseColor}>Choose colour</label>
          <div className={styles.colorWrapper}>
            <div
              className={`${styles.circleSize} ${styles.violet} ${
                bgColor === "#b38bfa" ? styles.active : ""
              }`}
              onClick={() => setBgColor("#b38bfa")}
            ></div>
            <div
              className={`${styles.circleSize} ${styles.pink} ${
                bgColor === "#ff79f2" ? styles.active : ""
              }`}
              onClick={() => setBgColor("#ff79f2")}
            ></div>
            <div
              className={`${styles.circleSize} ${styles.skyBlue} ${
                bgColor === "#43e6fc" ? styles.active : ""
              }`}
              onClick={() => setBgColor("#43e6fc")}
            ></div>
            <div
              className={`${styles.circleSize} ${styles.orange} ${
                bgColor === "#f19576" ? styles.active : ""
              }`}
              onClick={() => setBgColor("#f19576")}
            ></div>
            <div
              className={`${styles.circleSize} ${styles.darkBlue} ${
                bgColor === "#0047ff" ? styles.active : ""
              }`}
              onClick={() => setBgColor("#0047ff")}
            ></div>
            <div
              className={`${styles.circleSize} ${styles.blue} ${
                bgColor === "#6691ff" ? styles.active : ""
              }`}
              onClick={() => setBgColor("#6691ff")}
            ></div>
          </div>
        </div>
        <div className={styles.createButtonWrapper}>
          <button onClick={createGroupHandler}>Create</button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateGroup;
