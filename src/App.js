import { BrowserRouter, Routes, Route } from "react-router-dom";
import backgroundVideo from "./assets/bg.mp4";
import { Main } from "./pages/main";
import "./App.css";

function App() {
  return (
    <div className="App">
      <video autoPlay loop muted id="video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
