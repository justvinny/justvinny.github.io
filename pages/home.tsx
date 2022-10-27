import Layout from "../components/layout";
import styles from "../styles/HomePage.module.css";

const Home = () => (
  <Layout>
    <p>Vinson Beduya</p>
    <img src="/images/profile-pic.jpg" height="350" className={styles.avatar} />
  </Layout>
);

export default Home;
