import styles from "./Groups.module.css";
import addIcon from "../../assets/addIcon.png";

const Groups = (props) => {
  return (
    <section className={styles.groups}>
      <h1 className={styles.groupsHeading}>Pocket Notes</h1>
      {props.groupList?.map((group) => {
        return (
          <div className={styles.group} key={group.groupId} onClick={()=>props.onSetActiveGroupIdHandler(group.groupId)}>
            <div className={styles.avatar} style={{backgroundColor:group.bgColor}}>{group.groupName[0].toUpperCase()}</div>
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
