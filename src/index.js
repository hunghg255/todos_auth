import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';
// redux
import { Provider } from "react-redux";

// react-router
import { BrowserRouter } from "react-router-dom";

//styled-components
import { ThemeProvider } from "styled-components";

import App from "./App";
import Loader from './components/UI/Loader/Loader'

// config styles global
import theme from "./utils/theme";
import GlobalStyles from "./utils/global";
import store from "./store";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const root = document.getElementById("root");

ReactDOM.render(<div>Loading...</div>, root);


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <>
      <Wrapper>
        <Loader />
      </Wrapper>
      <GlobalStyles />
    </>
  </ThemeProvider>,
  root
);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <>
            <App />
            <GlobalStyles />
          </>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>,
    root
  );
});
