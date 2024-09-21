import {  useRef } from "react";

import * as htmlToImage from 'html-to-image';

import { Canvas } from "../components/Canvas/Canvas";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Toolbar } from "../components/Toolbar/Toolbar";
import { HomePageContainer, MainSection } from "./HomePage.styled";

function HomePage() {

  const canvasCardRef = useRef<HTMLDivElement>(null);

  function onDownload() {
    const cardEl = canvasCardRef.current;
    
    if(cardEl) {
      htmlToImage.toPng(cardEl)
      .then((dataURL) => {
        const anchor = document.createElement('a');
        anchor.href = dataURL;
        anchor.download = 'nostr-note';

        anchor.click();
      }).catch(err => console.log(err));
    }
  }

    return (
      <HomePageContainer>
        <Header/>

        <MainSection>
          <Toolbar
            onDownload={onDownload}
          />

          <Canvas
            ref={canvasCardRef}
          />
        </MainSection>

        <Footer />
      </HomePageContainer>
    );
  }
  
  export default HomePage
  