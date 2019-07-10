import React from "react";
import ReactDOM from "react-dom";

// redux
import { Provider } from "react-redux";
import store from "./store/index";

// react-router
import { BrowserRouter } from "react-router-dom";

//styled-components
import { ThemeProvider } from "styled-components";

import App from "./App";

// config styles global
import theme from "./utils/theme";
import GlobalStyles from "./utils/global";

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
  document.getElementById("root")
);
