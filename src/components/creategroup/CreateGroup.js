import Modal from "../../UI/Modal"
import styles from "./CreateGroup.module.css"

const CreateGroup = (props) => {
  return (
 <Modal onHideModal={props.onHideModal}>
  <div className={styles.createGroupWrapper}>
    <h2 className={styles.heading}>Create new Group</h2>
    <div className={styles.nameFieldWrapper}>
      <label className={styles.groupName}>Group Name</label>
      <input type='text' className={styles.input} placeholder="Enter group name"/>
    </div>
    <div className={styles.colorFieldWrapper}>
      <label className={styles.chooseColor}>Choose colour</label>
      <div className={styles.colorWrapper}>
        <div className={`${styles.circleSize} ${styles.violet}`}></div>
        <div className={`${styles.circleSize} ${styles.pink}`}></div>
        <div className={`${styles.circleSize} ${styles.skyBlue}`}></div>
        <div className={`${styles.circleSize} ${styles.orange}`}></div>
        <div className={`${styles.circleSize} ${styles.darkBlue}`}></div>
        <div className={`${styles.circleSize} ${styles.blue}`}></div>
      </div>
    </div>
    <div className={styles.createButtonWrapper}>
      <button>Create</button>
    </div>
  </div>
 </Modal>
  
  )
}

export default CreateGroup
