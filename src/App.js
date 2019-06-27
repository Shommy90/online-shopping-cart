import React from "react";
import Router from "./Router";

import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="page-container">
      <Navigation />
      <Router />
    </div>
  );
}

export default App;
