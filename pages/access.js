import { useRef, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import Layout from "../components/Layout";
import styles from "../styles/access.module.css";

const calc = (o) => `translateY（$ { o  *  0.1 } px）`;

const access = () => {
  const ref = useRef();
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }));

  const handleScroll = () => {
    const posY = ref.current.getBoundingClientRect().top;
    const offset = window.pageYOffset - posY;
    set({ offset });
    console.log(offset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <Layout title="Access">
      <div
        style={{
          background: "#123456",
          position: "relative",
          width: "100vw",
          height: "400px",
        }}
        ref={ref}
      >
        <animated.div
          style={{
            background: "#654321",
            position: "absolute",
            width: "100vw",
            height: "100px",
            transform: offset.interpolate(calc),
          }}
        />
      </div>
      <div className={styles.container} ref={ref}>
        <animated.div
          className={styles.test}
          styles={{ transform: offset.interpolate(calc) }}
        >
          Contents of your component
        </animated.div>
        <animated.div
          className={styles.test}
          styles={{ transform: offset.interpolate(calc) }}
        >
          Contents of your component
        </animated.div>
        <animated.div
          className={styles.test}
          styles={{ transform: offset.interpolate(calc) }}
        >
          Contents of your component
        </animated.div>
        <animated.div
          className={styles.test}
          styles={{ transform: offset.interpolate(calc) }}
        >
          Contents of your component
        </animated.div>
        <animated.div
          className={styles.test}
          styles={{ transform: offset.interpolate(calc) }}
        >
          Contents of your component
        </animated.div>
        <animated.div
          className={styles.test}
          styles={{ transform: offset.interpolate(calc) }}
        >
          Contents of your component
        </animated.div>
      </div>
    </Layout>
  );
};

export default access;
