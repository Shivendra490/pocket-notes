import styles from "./Notes.module.css"
import sendIcon from "../../assets/sendIcon.svg"

const Notes = () => {
  return (
    <section className={styles.notes}>
      <header className={styles.notesHeader}>
        <div className={styles.avatar}>JS</div>
        <div className={styles.groupName}>Javascript</div>
      </header>
      <div className={styles.notesBody}>
    
      </div>
      <footer className={styles.notesFooter}>
        <div className={styles.textAreaWrapper}>
            <textarea placeholder="Enter your text here...........">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut illum, facilis facere quia numquam sint reprehenderit earum amet excepturi, itaque beatae aliquid nam ipsum praesentium quo. Distinctio ipsa excepturi eius?
                met consectetur adipisicing elit. Aut illum, facilis facere quia numquam sint reprehenderit earum met consectetur adipisicing elit. Aut illum, facilis facere quia numquam sint reprehenderit earum
                met consectetur adipisicing elit. Aut illum, facilis facere quia numquam sint reprehenderit earum met consectetur adipisicing elit. Aut illum, facilis facere quia numquam sint reprehenderit earum met consectetur adipisicing elit. Aut illum, facilis facere quia numquam sint reprehenderit earum
            </textarea>
            <img src={sendIcon} className={styles.sendIcon} />
        </div>
      </footer>
    </section>
  )
}

export default Notes
