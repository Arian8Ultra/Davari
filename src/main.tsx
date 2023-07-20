/* eslint-disable @typescript-eslint/ban-ts-comment */
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import router from "./Routes/Router";
import "./index.css";
import theme from "./theme/theme";
import "./theme/color.css"
import { ApolloProvider } from "@apollo/client";
// @ts-ignore
import client from "./GraphQL/Apollo";


const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CacheProvider value={cacheRtl}>
      <ApolloProvider client={client}>

      </ApolloProvider>
          <RouterProvider router={router} />
      </CacheProvider>
    </ThemeProvider>
  </React.StrictMode>
);
