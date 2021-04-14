import Head from "next/head";
import Dock from "./Dock";
import styles from "./styles/Layout.module.css";

const Layout = ({ children, title = "blog test" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header className={styles.header}>
        <h1>Blog test</h1>
      </header>
      <main>{children}</main>
      <Dock />
    </>
  );
};

export default Layout;
