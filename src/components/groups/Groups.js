import styles from "./Groups.module.css";
import addIcon from "../../assets/addIcon.png";
import first2Chars from "../../utility/firstTwoChars";

const Groups = (props) => {
  return (
    <section className={styles.groups}>
      <h1 className={styles.groupsHeading}>Pocket Notes</h1>
      {props.groupList?.map((group) => {
        return (
          <div
            className={`${styles.group} ${
              props.activeGroupId === group.groupId ? styles.active : ""
            }`}
            key={group.groupId}
            onClick={() => props.onSetActiveGroupIdHandler(group.groupId)}
          >
            <div
              className={styles.avatar}
              style={{ backgroundColor: group.bgColor }}
            >
              {first2Chars(group.groupName)}
            </div>
            <div className={styles.groupName}>{group.groupName}</div>
          </div>
        );
      })}
      <div className={styles.addIconWrapper} onClick={props.onShowModal}>
        <img src={addIcon} alt={"add Icon"} />
      </div>
    </section>
  );
};

export default Groups;
