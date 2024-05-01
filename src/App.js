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
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [isGroupsHide, setIsGroupsHide] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
      if (window.innerWidth > 768) {
        setIsGroupsHide(false);
      }
    };
    window.addEventListener("resize", handleResize);
    if (getPocketDb()) {
      setGroupList(getPocketDb());
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
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
      <section
        className={`${styles.left} ${
          isMobileView && (isGroupsHide ? styles.hidden : "")
        }`}
      >
        <Groups
          groupList={groupList}
          onSetActiveGroupIdHandler={setActiveGroupIdHandler}
          onShowModal={showModal}
          activeGroupId={activeGroupId}
          isGroupsHide={isGroupsHide}
          setIsGroupsHide={setIsGroupsHide}
          isMobileView={isMobileView}
        />
      </section>
      <section
        className={`${styles.right} ${
          isMobileView && (isGroupsHide ? "" : styles.hidden)
        }`}
      >
        {activeGroupId ? (
          <Notes
            activeGroupId={activeGroupId}
            isGroupsHide={isGroupsHide}
            setIsGroupsHide={setIsGroupsHide}
            isMobileView={isMobileView}
          />
        ) : (
          <Home />
        )}
      </section>
    </main>
  );
}

export default App;
