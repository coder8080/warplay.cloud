import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import RegisterPage from "./pages/register-page/register-page.component";
import LoginPage from "./pages/login-page/login-page.component";
import store from "./redux/store";
import "./aos.css";
import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Provider>
  );
}

export default App;
