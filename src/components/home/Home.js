import styles from "./Home.module.css";
import homeImg from "../../assets/home.png";

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.imageWrapper}>
        <img src={homeImg} />
      </div>
      <h2>Pocket Notes</h2>
      <p className={styles.homeText}>
        Send and receive messages without keeping your phone online. Use Pocket
        Notes on up to 4 linked devices and 1 mobile phone
      </p>
    </section>
  );
};

export default Home;
