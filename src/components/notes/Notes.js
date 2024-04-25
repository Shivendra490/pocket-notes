import styles from "./Notes.module.css";
import { useEffect, useState } from "react";
import { addNoteToGroup, getPocketDb } from "../../utility/localStorage";
import formatDate from "../../utility/formatDate";
import backIcon from "../../assets/backIcon.png";
import first2Chars from "../../utility/firstTwoChars";
import { IoSendSharp } from "react-icons/io5";

const Notes = (props) => {
  const [inputText, setInputText] = useState("");
  const [activeGroup, setActiveGroup] = useState("");

  useEffect(() => {
    const pocketDb = getPocketDb();
    const currentGroup = pocketDb?.find(
      (group) => group.groupId === props.activeGroupId
    );
    setActiveGroup(currentGroup);
  }, [props.activeGroupId]);

  const addNoteHandler = () => {
    if (!inputText) {
      return;
    }
    const noteId = new Date().getTime().toString();
    const noteTime = formatDate();
    const noteText = inputText;
    const note = { noteId, noteTime, noteText };
    addNoteToGroup(props.activeGroupId, note);
    const pocketDb = getPocketDb();
    const currentGroup = pocketDb?.find(
      (group) => group.groupId === props.activeGroupId
    );
    setActiveGroup(currentGroup);
    setInputText("");
  };
  return (
    <section className={styles.notes}>
      <header className={styles.notesHeader}>
        <img
          src={backIcon}
          alt="back icon"
          className={styles.backIcon}
          onClick={() => {
            props.isMobileView && props.setIsGroupsHide(false);
          }}
        />
        <div
          className={styles.avatar}
          style={{ backgroundColor: activeGroup.bgColor }}
        >
          {first2Chars(activeGroup?.groupName)}
        </div>
        <div className={styles.groupName}>{activeGroup?.groupName}</div>
      </header>
      <div className={styles.notesBody}>
        {activeGroup.notes?.map((note) => {
          return (
            <div className={styles.singleNote} key={note.noteId}>
              <p className={styles.noteText}>{note.noteText}</p>
              <p className={styles.noteTime}>
                {note.noteTime.substring(0, 11)} &#8226;{" "}
                {note.noteTime.substring(13)}{" "}
              </p>
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
          <IoSendSharp
            className={`${styles.sendIcon} ${
              inputText ? styles.enabled : styles.disabled
            }`}
            onClick={addNoteHandler}
          />
          {/* <img
            src={sendIcon}
            className={styles.sendIcon}
            onClick={addNoteHandler}
            alt="send Icon"
          /> */}
        </div>
      </footer>
    </section>
  );
};

export default Notes;
