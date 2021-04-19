import Link from "next/link";

import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import TelIcon from "../components/TelIcon";

import Slide from "../components/SliderComponent";

export default function Home({ blogs }) {
  return (
    <>
      <Layout>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <video
              className={styles.back}
              src="./Golden.mp4"
              muted
              autoPlay
              loop
              playsInline
            ></video>
            <img src="./logo.png" className={styles.logo} />
          </div>

          <div className={styles.container}>
            <h2>CONCEPT</h2>
            <section className={styles.section}>
              <p>
                <h3>洗練された大人の遊び場・・・</h3>
                洗練されたゴージャスでラグジュアリーな空間。
                <br />
                遊びなれた大人たちのワンランク上のクラブ＆ディスコ。
                <br />
                <br />
                2010年に待望の新オープンを果たしたMAHARAJAは club & disco
                のミックススタイル。
                <br />
                <br />
                オシャレにアフタータイムを楽しむ大人たちの、新しい遊びスタイルを提案します。
                <br />
                <br />
                最新のサウンドシステムやクラブ・ディスコのトップDJたち、
                ワンランク上のVIPルームなど魅力的な空間を提供。
                <br />
                <br />
                誰もが安心して楽しめるクラブディスコ『MAHARAJA』で
                特別な空間を心ゆくまでお楽しみ下さい。
              </p>
            </section>
          </div>
          <div className={styles.slide_container}>
            <h2>Pick Up News</h2>
            <Slide />
          </div>
          <div className={styles.event_container}>
            <h2>Event Info</h2>
            <ul>
              {blogs.map((blog) => (
                <li key={blog.id}>
                  <Link href={`blog/${blog.id}`}>
                    <div className={styles.blogContainer}>
                      <a>{blog.title}</a>
                      <a>1970/01/01</a>
                    </div>
                  </Link>

                  <img src="./home2.png" alt="test" />
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.container}>
            <h2>Entance Fee</h2>
            <div className={styles.fee_flex}>
              <div className={styles.fee}>
                <p></p>
                <p>Happy Hour</p>
                <p>正規料金</p>
                <p>Men</p>
                <p>Lady</p>
                <p>¥2,500-</p>
                <p>¥3,500-</p>
                <p>¥1,500-</p>
                <p>¥2,500-</p>
              </div>
              <p>イベントにより異なりますのでご注意ください。</p>
              <div>
                <p>クーポンやイベントの情報はこちら</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <h2>Information</h2>
          <div className={styles.infoList}>
            <div className={styles.infoItem}>
              <img src="./bottle.png" alt="パーティープラン" />
              <h3>Party Plan</h3>
            </div>
            <div className={styles.infoItem}>
              <img src="./rental.png" alt="レンタルスペース" />
              <h3>
                Rental <br />
                Space
              </h3>
            </div>

            <Link href="/">
              <div className={styles.infoItem}>
                <img src="./members.png" alt="メンバーズカード" />
                <h3>
                  Members <br />
                  Card
                </h3>
              </div>
            </Link>
            <Link href="/">
              <div className={styles.infoItem}>
                <img src="./mail.png" alt="メールマガジン" />
                <h3>
                  Mail <br />
                  Magazine
                </h3>
              </div>
            </Link>
            <Link href="/">
              <div className={styles.infoItem}>
                <img src="./shop.png" alt="ウェブストア" />
                <h3>Web Store</h3>
              </div>
            </Link>
            <Link href="/">
              <div className={styles.infoItem}>
                <img src="./recruit.png" alt="リクルート" />
                <h3>Recruit</h3>
              </div>
            </Link>
          </div>

          <div className={styles.snsLink}>
            <Link href="/">
              <div className={styles.snsItem}>
                <img src="./twitter.png" alt="Twitter" />
              </div>
            </Link>
            <Link href="/">
              <div className={styles.snsItem}>
                <img src="./instagram.png" alt="インスタ" />
              </div>
            </Link>
            <Link href="/">
              <div className={styles.snsItem}>
                <img src="./Line.png" alt="ライン" />
              </div>
            </Link>
          </div>
        </div>
        <TelIcon />
      </Layout>
    </>
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
