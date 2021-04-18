import "../styles/globals.css";

import { AnimateSharedLayout } from "framer-motion";
function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      <div suppressHydrationWarning>
        {typeof window === "undefined" ? null : <Component {...pageProps} />}
      </div>
    </AnimateSharedLayout>
  );
}

export default MyApp;
