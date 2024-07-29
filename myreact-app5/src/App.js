// /* eslint-disable */ 경고 메세지 없애기
import './App.css';
import React, {useState} from 'react';

function App() {
  // 일반 데이터
  let irum = '지연의 jsx사용법 : 일반 데이터'

  //state는 변수. const, let 등으로 선언한 변수와 다르게 값이 변하면 관련 있는 컴포넌트들이 재렌더링되어 화면이 바뀐다.
  //state 데이터
  let [jemok, setJemokFunc] = useState('자바 스크립트'); //문자열 기억
  let [jemok2, setJemokFunc2] = useState(['리액트', '뷰']); //배열 자료 기억

  //이벤트 처리 함수 1
  function dataUpdate(){
    //let newArr = [... jemok]; //잔개 연산자에 의해 문자열이 낱개 문자로 분리 되어 배열로 복사된다
    //console.log(newArr);
    jemok = "React 어려워~";
    setJemokFunc(jemok); //jemok state는 setJemokFunc 함수로 값 수정
    console.log(jemok);
  }

  function dataUpdate2(){
    let newArr = [...jemok2]; //배열의 일부 수정을 위해 전개 연산자로 복사
    console.log(newArr);
    newArr[1] = "뷰 화이팅"  //newArr[1] 값 변경
    setJemokFunc2(newArr);  //jemok2값을 변경하기 위해 setJemokFunc2함수 사용
  }

  //이벤트 처리
  let [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className='blue_bar'>
      <h1>리액트 state 이해</h1> 
      </div>

      <div>
        <h3>{jemok}</h3>
        <span>{irum}</span><br/>
        <p>state 확인</p>
        <button onClick={dataUpdate}>jemok값 변경</button>
      </div>

      <div className='list'>
        <h3>jemok2[0] : {jemok2[0]}</h3>
        <span>jemok2[1] : {jemok2[1]}</span><br/>
        <p>state 확인</p>
        <button onClick={dataUpdate2}>jemok2 값 변경</button>
      </div>

      <div>
        이모티콘 클릭 : <span onClick={
          () => {setCount(count + 1)}}>😎🤦‍♂️😎</span>{count}번 클릭
      </div>
    </div>
  );
}

export default App;
