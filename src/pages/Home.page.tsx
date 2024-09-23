import { useRef } from "react";

import { Canvas } from "../components/Canvas/Canvas";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Toolbar } from "../components/Toolbar/Toolbar";
import { HomePageContainer, MainSection } from "./HomePage.styled";
import { copyDataURL, downloadImage, getDataURLFromHTMLDOM } from "../shared/utils";
import { useNoteContext } from "../contexts/note.context";

function HomePage() {
  const canvasCardRef = useRef<HTMLDivElement>(null);

  const { note } = useNoteContext();

  function onDownload() {
    const cardEl = canvasCardRef.current;

    if (cardEl) {
      getDataURLFromHTMLDOM(cardEl).then((dataURL) =>
        downloadImage("nostr-note", dataURL)
      );
    }
  }

  function onCopy() {
    const cardEl = canvasCardRef.current;

    if (cardEl) {
      getDataURLFromHTMLDOM(cardEl).then(copyDataURL);
    }
  }

  return (
    <HomePageContainer>
      <Header/>

      <MainSection>
        <Toolbar
          onDownload={onDownload}
          onCopy={onCopy}
        />

        <Canvas
          ref={canvasCardRef}
          noteHTML={note.html}
        />
      </MainSection>

      <Footer />
    </HomePageContainer>
  );
}

export default HomePage;
