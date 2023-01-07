import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Home from "containers/pages/Home";
import About from "containers/pages/About";
import Projects from "containers/pages/Projects";
import Contact from "containers/pages/Contact";
import Error404 from "containers/errors/Error404";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<Error404/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/about/" element={<About/>} />
          <Route path="/projects/" element={<Projects/>} />
          <Route path="/contact/" element={<Contact/>} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
