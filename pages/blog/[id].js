import Layout from "../../components/Layout";

export default function BlogId({ blog }) {
  return (
    <Layout title={blog.title}>
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  const data = await fetch(
    "https://watarutest.microcms.io/api/v1/blog_test",
    key
  )
    .then((res) => res.json())
    .catch(() => null);
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  const data = await fetch(
    `https://watarutest.microcms.io/api/v1/blog_test/${id}`,
    key
  )
    .then((res) => res.json())
    .catch(() => null);
  return {
    props: {
      blog: data,
    },
  };
};
