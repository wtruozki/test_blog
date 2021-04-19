import Head from "next/head";
import Dock from "./Dock";
import styles from "./styles/Layout.module.css";

import { motion } from "framer-motion";
const Layout = ({ children, title = "blog test" }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <Head>
        <title>{title}</title>
      </Head>
      <header className={styles.header}>
        <h1>Blog test</h1>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <p>&copy; 2021 MAHARAJA </p>
      </footer>
      <Dock />
    </motion.div>
  );
};

export default Layout;
