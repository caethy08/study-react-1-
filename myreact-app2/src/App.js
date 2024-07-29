import React, {useState} from "react";
import HookTest from './mydir/HookTest';
import HooKTest2 from "./mydir/HookTest2";

// class App extends Component{
//   state = {
//     count:0
//   };

//   countUpdate(n){
//     this.setState({count:n});
//   }

//   render(){
//     const {count} = this.state;  
//     //count라는 변수에 sate값을 대응, const나 let으로 변수 설정
//     return(
//       <div>
//         number : {count} &nbsp;
//         <button onClick={() => {
//           this.countUpdate(count + 1);
//         }}>증가 1</button>
//         <hr/>
//         <HookTest/>
//         <hr/>
//         <HooKTest2></HooKTest2>
//       </div>
//     );
//   }
// }
const App = () => {
  const [count, setCount] = useState(0); //6-12라인을 함수형 언어로 표현한 것. 상태값 count에 변화를 주기 위해 setCount사용

  const countUpdate = (n) => { //이벤트 핸들러(처리) 함수(내장함수)
    setCount(n);
  };

  return (
    <div>
      number : {count}&nbsp;
      <button onClick={() => countUpdate(count + 1)}>증가 1</button>
      <hr />
      <HookTest />
      <hr />
      <HooKTest2/>
    </div>
  );
};

export default App;
