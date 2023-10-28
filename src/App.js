import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/header';
import { BrowserRouter as Router } from 'react-router-dom';
import { LightTheme } from './utils/themes';
import HeroSection from './components/heroSection';
import Mine from './components/mine';

const Body = styled.div`
   background-color: ${({ theme }) => theme.card_light};
  background-image: url("/images/blockchainbackground.png");
  background-size: cover;
  background-position: center;
  position: fixed;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`
const Wrapper = styled.div`
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

function App() {
  return (
    <ThemeProvider theme={LightTheme}>

  <Router>
  <Header/>

  <Body>
    <HeroSection/>
    <Mine/>
    </Body>
  </Router>
  </ThemeProvider>

  );
    
  
  
}

export default App;
