import { useEffect, useState } from "react";
import styles from "./App.module.css";
import CreateGroup from "./components/creategroup/CreateGroup";
import Groups from "./components/groups/Groups";
import Home from "./components/home/Home";
import Notes from "./components/notes/Notes";
import { getPocketDb } from "./utility/localStorage";

function App() {
  const [isModalShown, setIsModalShown] = useState(false);
  const [activeGroupId, setActiveGroupId] = useState(null);
  const [groupList, setGroupList] = useState();

  useEffect(() => {
    if (getPocketDb()) {
      setGroupList(getPocketDb());
    }
  }, []);

  const updateGroupList = () => {
    setGroupList(getPocketDb());
  };

  const setActiveGroupIdHandler = (id) => {
    setActiveGroupId(id);
  };

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
          activeGroupId={activeGroupId}
        />
      </section>
      <section className={styles.right}>
        {activeGroupId ? <Notes activeGroupId={activeGroupId} /> : <Home />}
      </section>
    </main>
  );
}

export default App;
