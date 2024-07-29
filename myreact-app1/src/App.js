import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Navdata from './mydir/navdata';

//클래스 컴포넌트. 조립식 프로그램이 가능해진다. 클래스는 render을 가져줘야함 리턴값은 render안에서 선언
class Subject extends Component{
  render(){
    return(
      <header>
        <h1>머리글 : 웹 문서</h1>
      </header>
    )
  }
}

//함수 컴포넌트 작성. 컴포넌트 첫글자는 대문자. 함수에서는 render없이 그냥 return
function Welcome(props){
  return(
    <article>
      {props.who} 글 기사 냐옹
    </article>
  )
}

function App() {
  return (
    <div className="App">
      연습이다
      <Subject></Subject> {/* 컴포넌트를 호출*/}
      <br></br>
      <Welcome></Welcome>
      <br/>
      <Welcome who='로켓단'></Welcome>
      <br/>
      <Navdata msg='출발'></Navdata>
    </div>
  );
}

export default App;
