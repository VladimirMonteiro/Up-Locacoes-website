import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Tools from "./pages/tools/Tools";
import About from "./pages/about/About";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ferramentas" element={<Tools />} />
          <Route path="/sobre" element={<About />} />
        </Routes>
        <Footer />  
      </Router>
    </div>
  );
}

export default App;
