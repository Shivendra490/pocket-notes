import styles from "./Groups.module.css"
import addIcon from "../../assets/addIcon.png"

const Groups = (props) => {
  return (
    <section className={styles.groups}>
      <h1 className={styles.groupsHeading}>Pocket Notes</h1>
      <div className={styles.group}>
        <div className={styles.avatar}>
            JS
        </div>
        <div className={styles.groupName}>Javascript</div>
      </div>
      <div className={styles.group}>
        <div className={styles.avatar}>
            JS
        </div>
        <div className={styles.groupName}>Javascript</div>
      </div>
      <div className={styles.addIconWrapper} onClick={props.onShowModal}>
        <img src={addIcon} alt={'add Icon'}/>
      </div>
    </section>
  )
}

export default Groups
