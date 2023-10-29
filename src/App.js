import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import Header from "./components/header";
import { BrowserRouter as Router } from "react-router-dom";
import { LightTheme } from "./utils/themes";
import HeroSection from "./components/heroSection";
import Mine from "./components/mine";
import Chain from "./components/chain";
import Transaction from "./components/transaction";
import Footer from "./components/footer";

const Body = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  background-image: url("/images/blockchainbackground.png");
  background-size: cover;
  background-position: center;
  position: fixed;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <Router>
        <Header />

        <Body>
          <HeroSection />
          <Mine />
          <Chain />
          <Transaction />
          <Footer />
        </Body>
      </Router>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
