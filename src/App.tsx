// import "./App.css";

// function App() {
//   return (
//     <div style={{ padding: "40px", textAlign: "center" }}>
//       <h1>RedSegSoluções em TI</h1>
//       <p>Projeto React + Vite configurado com Sucesso.</p>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

