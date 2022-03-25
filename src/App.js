import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import store from "./redux/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Provider>
  );
}

export default App;
