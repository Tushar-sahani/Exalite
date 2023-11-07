import "./App.css";
import Home from "./components/Dashboard/Home";
import { TokenProvider } from "./context/context";
import React from "react";

function App() {
  return <Home />;
}

function AppWrapper() {
  return (
    <TokenProvider>
      <App />
    </TokenProvider>
  );
}
export default AppWrapper;
