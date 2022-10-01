import { Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  
  return (
    <Routes>
        {/* <Route path="/react-practice/about-us">
          <h1>Hello</h1>
        </Route> */}
        <Route path="/react-practice/movie/:id" element={<Detail/>} />
        <Route path="/react-practice" element={<Home />} />
    </Routes>
  );
}

export default App;