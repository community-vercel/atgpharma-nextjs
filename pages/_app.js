import React, { useEffect } from "react";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../components/Panels/gallery.css"
import { CookiesProvider } from "react-cookie";
import RoboCAPContextProvider from "../context";
import EstiamteContextProvider from "../context/estimateContext";
import DimensionContextProvider from "../context/DimensionContext";
import { useRouter } from "next/router";

// COOKIES
import { useCookies } from "react-cookie";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { src } = router.query;
  const [cookies, setCookie] = useCookies(["leadSrc"]);
  const srcRegExp = /^in\-[12][0-9]{2}|300?$/;

  useEffect(() => {
    if (src && cookies.leadSrc !== src && srcRegExp.test(src)) {
      setCookie("leadSrc", src, { path: "/" });
    }
  }, [src]);

  return (
    <CookiesProvider>
      <RoboCAPContextProvider>
        <EstiamteContextProvider>
          <DimensionContextProvider>
          <Component {...pageProps} />
          </DimensionContextProvider>
        </EstiamteContextProvider>
      </RoboCAPContextProvider>
    </CookiesProvider>
  );
}

export default MyApp;
