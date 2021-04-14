import Link from "next/link";

import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Blog_page({ blogs }) {
  return (
    <Layout title="blog">
      <div className={styles.top}>
        <p>this is BlogTop</p>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Link href={`blog/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };

  const data = await fetch(
    "https://watarutest.microcms.io/api/v1/blog_test",
    key
  )
    .then((res) => res.json())
    .catch(() => null);

  return {
    props: {
      blogs: data.contents,
    },
  };
};
