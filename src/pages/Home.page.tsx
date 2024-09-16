import { Canvas } from "../components/Canvas/Canvas";
import { Header } from "../components/Header/Header";
import { Toolbar } from "../components/Toolbar/Toolbar";
import { HomePageContainer, MainSection } from "./HomePage.styled";

function HomePage() {
    return (
      <HomePageContainer>
        <Header/>

        <MainSection>
          <Toolbar/>

          <Canvas />
        </MainSection>
      </HomePageContainer>
    );
  }
  
  export default HomePage
  