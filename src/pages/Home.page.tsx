import { useRef, useState } from "react";

import { Canvas } from "../components/Canvas/Canvas";
// import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Toolbar } from "../components/Toolbar/Toolbar";
import { HomePageContainer, MainSection } from "./HomePage.styled";
import { copyDataURL, downloadImage, getDataURLFromHTMLDOM } from "../shared/utils";
import { useNoteContext } from "../contexts/note.context";
import { GRADIENT, GRADIENTS } from "../shared/constants";

function HomePage() {
  const canvasCardRef = useRef<HTMLDivElement>(null);
  const [ showResponse, setShowResponse ] = useState(true);
  const [ selectedGradient, setSelectedGradient ] = useState<GRADIENT>(GRADIENT.default);
  const [ isDownloading, setIsDownloading ] = useState(false);

  const { note } = useNoteContext();

  function onDownload() {
    setIsDownloading(true);
    const cardEl = canvasCardRef.current;

    if (cardEl) {
      getDataURLFromHTMLDOM(cardEl).then((dataURL) =>
        downloadImage("nostr-note", dataURL)
      ).finally(() => setIsDownloading(false));
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
          showResponse={showResponse}
          onChangeShowResponse={(val: boolean) => setShowResponse(val)}
          gradient={selectedGradient}
          onGradientChange={(gradient: GRADIENT) => setSelectedGradient(gradient)}
          isDownloading={isDownloading}
        />

        <Canvas
          ref={canvasCardRef}
          noteHTML={note.html}
          note={note}
          showResponse={showResponse}
          gradient={GRADIENTS[selectedGradient]}
        />
      </MainSection>

      {/* <Footer /> */}
    </HomePageContainer>
  );
}

export default HomePage;
