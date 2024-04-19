import styles from "./Notes.module.css"

const Notes = () => {
  return (
    <section className={styles.notes}>
      <header className={styles.notesHeader}>
        <div className={styles.avatar}>js</div>
        <div className={styles.groupName}>Javascript</div>
      </header>
      <div className={styles.notesBody}>
    
      </div>
      <footer className={styles.notesFooter}>
        <div className={styles.textAreaWrapper}>
            <textarea>
                hello
            </textarea>
        </div>
      </footer>
    </section>
  )
}

export default Notes
