import styles from "./Groups.module.css"

const Groups = () => {
  return (
    <section className={styles.groups}>
      <h1>Pocket Notes</h1>
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
    </section>
  )
}

export default Groups
