import styles from "./Notes.module.css";
import sendIcon from "../../assets/sendIcon.svg";
import { useEffect, useState } from "react";
import { addNoteToGroup, getPocketDb } from "../../utility/localStorage";

const Notes = ({activeGroupId}) => {
  const [inputText, setInputText] = useState("");
  const [activeGroup,setActiveGroup]=useState("")

  // const addNoteHandler = (note) => {
  //   console.log("nttttts", note);
  //   addNoteToGroup(activeGroupId, note);
  // };

  useEffect(()=>{
    const pocketDb=getPocketDb()
    const currentGroup=pocketDb?.find((group)=>group.groupId===activeGroupId)
    setActiveGroup(currentGroup)

    // if(activeGroupId){
    //   const currentGroup=groupList?.find((curGroup)=>curGroup.groupId===activeGroupId)
    //   setActiveGroupNotes([...currentGroup.notes])
    // }
  },[activeGroupId])

  const addNoteHandler = () => {
    if (!inputText) {
      return;
    }
    const noteId = new Date().getTime().toString();
    const noteTime = new Date();
    const noteText = inputText;
    const note = { noteId, noteTime, noteText };
    // props.onAddNoteHandler(note);
    addNoteToGroup(activeGroupId,note)
    const pocketDb=getPocketDb()
    const currentGroup=pocketDb?.find((group)=>group.groupId===activeGroupId)
    setActiveGroup(currentGroup)
    setInputText("");
  };
  return (
    <section className={styles.notes}>
      <header className={styles.notesHeader}>
        <div className={styles.avatar} style={{backgroundColor:activeGroup.bgColor}}>{activeGroup?.groupName.toUpperCase()}</div>
        <div className={styles.groupName}>{activeGroup?.groupName}</div>
      </header>
      <div className={styles.notesBody}>
        {activeGroup.notes?.map((note) => {
          return (
            <div className={styles.singleNote}>
              <p className={styles.noteText}>
                {note.noteText}
              </p>
              <p className={styles.noteTime}>9 Mar 2023 . 10:10 AM</p>
            </div>
          );
        })}
      </div>
      <footer className={styles.notesFooter}>
        <div className={styles.textAreaWrapper}>
          <textarea
            placeholder="Enter your text here....."
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
          ></textarea>
          <img
            src={sendIcon}
            className={styles.sendIcon}
            onClick={addNoteHandler}
            alt='send Icon'
          />
        </div>
      </footer>
    </section>
  );
};

export default Notes;
