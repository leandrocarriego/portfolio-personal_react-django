import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Home from "containers/pages/Home";
import Projects from "containers/pages/Projects";
import Error404 from "containers/errors/Error404";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<Error404/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/projects/" element={<Projects/>} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
