import styles from "./Home.module.css";
import homeImg from "../../assets/home.png";
import lockIcon from "../../assets/lock.png";

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.imageWrapper}>
        <img src={homeImg} alt="home" />
      </div>
      <h2 className={styles.homeHeading}>Pocket Notes</h2>
      <p className={styles.homeText}>
        Send and receive messages without keeping your phone online. Use Pocket
        Notes on up to 4 linked devices and 1 mobile phone
      </p>
      <div className={styles.homeFooter}>
        <img className={styles.lockIcon} src={lockIcon} alt="lock icon" />
        <p>end-to-end encrypted</p>
      </div>
    </section>
  );
};

export default Home;
