import { useState } from "react";
import styles from "./App.module.css";
import CreateGroup from "./components/creategroup/CreateGroup";
import Groups from "./components/groups/Groups";
import Home from "./components/home/Home";
import Notes from "./components/notes/Notes";

function App() {
  const [isModalShown,setIsModalShown]=useState(true)

  const showModal=()=>{
    setIsModalShown(true)
  }
  const hideModal=()=>{
    console.log('155555')
    setIsModalShown(false)
  }
  return (
    <main className={styles.app}>
      {isModalShown && <CreateGroup onHideModal={hideModal}/>}
      <section className={styles.left}>
        <Groups onShowModal={showModal}/>
      </section>
      <section className={styles.right}>
       { true ? <Notes /> :<Home/>}
      </section>
    </main>
  );
}

export default App;
