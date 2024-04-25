import { useEffect, useState } from "react";
import styles from "./App.module.css";
import CreateGroup from "./components/creategroup/CreateGroup";
import Groups from "./components/groups/Groups";
import Home from "./components/home/Home";
import Notes from "./components/notes/Notes";
import { addNoteToGroup, getPocketDb } from "./utility/localStorage";

function App() {
  const [isModalShown, setIsModalShown] = useState(false);
  const [activeGroupId, setActiveGroupId] = useState(null);
  // const [activeGroupNotes,setActiveGroupNotes]=useState([])
  const [groupList, setGroupList] = useState();

  useEffect(() => {
    if(getPocketDb()){
      setGroupList(getPocketDb());
    }
   
  }, []);

 

  const updateGroupList = (group) => {
    // setGroupList((prev) => {
    //   if (prev) {
    //     console.log("ifprev", prev);
    //     return [...prev, group];
    //   } else {
    //     console.log("elseprev", prev);
    //     return [group];
    //   }
    // });
    setGroupList(getPocketDb())
  };

  const setActiveGroupIdHandler = (id) => {
    console.log("id", id);
    setActiveGroupId(id);
  };

  // const addNoteHandler = (note) => {
  //   console.log("nttttts", note);
  //   addNoteToGroup(activeGroupId, note);
  // };

  const showModal = () => {
    setIsModalShown(true);
  };
  const hideModal = () => {
    setIsModalShown(false);
  };
  return (
    <main className={styles.app}>
      {isModalShown && (
        <CreateGroup
          onUpdateGroupList={updateGroupList}
          onHideModal={hideModal}
        />
      )}
      <section className={styles.left}>
        <Groups
          groupList={groupList}
          onSetActiveGroupIdHandler={setActiveGroupIdHandler}
          onShowModal={showModal}
        />
      </section>
      <section className={styles.right}>
        {activeGroupId ? (
          <Notes
            activeGroupId={activeGroupId}
            // onAddNoteHandler={addNoteHandler}
          />
        ) : (
          <Home />
        )}
      </section>
    </main>
  );
}

export default App;
