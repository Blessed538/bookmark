import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "../components/organisms/Header";
import theme from "../style/theme";
import { useEffect, useState } from "react";
import Footer from "../components/organisms/Footer";
import { ModalContextProvider } from "../context/NavbarContext";
export default function App({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <ChakraProvider theme={theme} resetCSS>
        <ModalContextProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ModalContextProvider>
      </ChakraProvider>
    );
  }
}
