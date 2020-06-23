import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
const Header = React.lazy(() => import("mf-nav/Header"));
const Footer = React.lazy(() => import("mf-footer/Footer"));

const App = () => (
  <>
    <React.Suspense fallback={<div>Loading header</div>}>
      <Header />
    </React.Suspense>
    <div>Hi there, I'm React from React.</div>
    <React.Suspense fallback={<div>Loading footer</div>}>
      <Footer />
    </React.Suspense>
  </>
);

ReactDOM.render(<App />, document.getElementById("app"));
