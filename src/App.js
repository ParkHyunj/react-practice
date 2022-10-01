import { Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  
  return (
    <Routes>
        {/* <Route path="/react-practice/about-us">
          <h1>Hello</h1>
        </Route> */}
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail/>} />
        <Route path="/react-practice" element={<Home />} />
        <Route path="/react-practice/movie/:id" element={<Detail/>} />
    </Routes>
  );
}

export default App;