import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
