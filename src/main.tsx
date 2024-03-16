/* eslint-disable @typescript-eslint/ban-ts-comment */
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import router from "./Routes/Router";
import theme from "./theme/theme";
import "./theme/color.css";
import { ApolloProvider } from "@apollo/client";
import client from "./GraphQL/Apollo";
import "./index.css";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
  prepend: true,
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CacheProvider value={cacheRtl}>
            <ApolloProvider client={client}>
              <RouterProvider router={router} />
            </ApolloProvider>
        </CacheProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
