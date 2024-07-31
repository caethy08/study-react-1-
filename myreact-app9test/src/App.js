import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Gugudan from "./menu/Gugudan";

function App() {
  return (
    <Router>
    <div className="App">
      <h2>메인 페이지</h2>
      <br/>
      <nav>
      <Link to="/gugudan">구구단 메뉴</Link> |
      </nav>

      <Routes>
        <Route path="/gugudan" element={<Gugudan/>}></Route>
      </Routes>

    </div>
    </Router>
  );
}

export default App;
