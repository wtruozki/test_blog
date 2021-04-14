import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const news = () => {
  return (
    <Layout title="News">
      <div className={styles.top}>
        <p>this is News</p>
      </div>
    </Layout>
  );
};

export default news;
