import React from "react";
import MyTest from "./exam/Test";
import About from "./exam/About";
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Counter from "./exam/Counter";
import Input1 from "./exam/Input1";
import Input2 from "./exam/Input2";
import Multidata from "./exam/Multidata";

function App() {
  return (
    <Router> {/*브라우저 라우터를 사용 */}
    <div className="App">
      <h2> 라우트 연습용 파일</h2>
      <MyTest />

      {/* 메뉴 작성 : 라우팅 연습 */}
      <nav>
        {/* Link 는 a tag로 전환 : 요청명 개념으로 이해*/}
        <Link to="/"> Test화면 </Link> | 
        <Link to="/about"> About보기 </Link> | 
        <Link to="/count"> 친구 추가 삭제 </Link> | 
        <Link to="/input1"> 자료 입력 1</Link> | 
        <Link to="/input2"> 자료 입력 2</Link> | 
        <Link to="/multidata"> 배열 자료</Link> | 
      </nav>

      <Routes>
      {/* 컴포넌트에서 동적 라우팅 구현 가능 */}
      {/*실질적으로 등장하는 것은 컴포넌트들 element={<[컴포넌트명[>}]*/}
        <Route path="/" element={<MyTest/>}></Route> 
        <Route path="/about" element={<About/>}></Route> 
        <Route path="/count" element={<Counter/>}></Route> 
        <Route path="/input1" element={<Input1/>}></Route> 
        <Route path="/input2" element={<Input2/>}></Route> 
        <Route path="/multidata" element={<Multidata/>}></Route> 

      </Routes>
    </div>
    </Router>
  );
}

export default App;
