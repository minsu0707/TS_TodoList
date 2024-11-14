import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";

import { Header } from "./components/Header";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrap>
        <Header />
      </AppWrap>
    </>
  );
}

export default App;

const AppWrap = styled.div`
  width: 100vw;
  height: 100%;
`;
