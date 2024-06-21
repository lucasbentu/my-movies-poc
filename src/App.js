import { Header } from "./components/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
import { About } from "./views/About";

function App() {
  return (
    <BrowserRouter>
      
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
