import { StrictMode } from "react";
import { render } from "react-dom";
import App from "./App";
import "antd/dist/antd.css";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";

const root = document.getElementById("root");

const themes = {
  dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/light-theme.css`,
};

render(
  <Auth0Provider
    domain="kachii-auth.eu.auth0.com"
    clientId={process.env.REACT_APP_CLIENT_ID || ""}
    redirectUri={"http://127.0.0.1:3000/events"}
  >
    <StrictMode>
      <ThemeSwitcherProvider
        themeMap={themes}
        defaultTheme="light"
        insertionPoint="styles-insertion-point"
      >
        <App />
      </ThemeSwitcherProvider>
    </StrictMode>
  </Auth0Provider>,
  root
);
