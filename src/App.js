import styles from "./App.module.css";
import Groups from "./components/groups/Groups";
import Home from "./components/home/Home";
import Notes from "./components/notes/Notes";

function App() {
  return (
    <main className={styles.app}>
      <section className={styles.left}>
        <Groups />
      </section>
      <section className={styles.right}>
       { false ? <Notes /> :<Home/>}
      </section>
    </main>
  );
}

export default App;
