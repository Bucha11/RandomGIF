import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { WorkZone } from "./Components/WorkZone/WorkZone";

function App() {
  const error = useSelector((state) => state.error);
  return (
    <div>
      <BrowserRouter>
        <Header />
        {error ? "Oops this is error" : <WorkZone />}
      </BrowserRouter>
    </div>
  );
}

export default App;
