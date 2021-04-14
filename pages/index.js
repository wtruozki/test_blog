import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout title="Home">
      <div className={styles.top}>
        <p>this is Home</p>
      </div>
    </Layout>
  );
}
