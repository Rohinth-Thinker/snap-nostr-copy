import { useRef } from "react";

import { Canvas } from "../components/Canvas/Canvas";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Toolbar } from "../components/Toolbar/Toolbar";
import { HomePageContainer, MainSection } from "./HomePage.styled";
import { downloadImage, getDataURLFromHTMLDOM } from "../shared/utils";

function HomePage() {
  const canvasCardRef = useRef<HTMLDivElement>(null);

  function onDownload() {
    const cardEl = canvasCardRef.current;

    if (cardEl) {
      getDataURLFromHTMLDOM(cardEl).then((dataURL) =>
        downloadImage("nostr-note", dataURL)
      );
    }
  }

  return (
    <HomePageContainer>
      <Header />

      <MainSection>
        <Toolbar onDownload={onDownload} />

        <Canvas ref={canvasCardRef} />
      </MainSection>

      <Footer />
    </HomePageContainer>
  );
}

export default HomePage;
