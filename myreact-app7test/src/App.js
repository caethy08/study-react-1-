import React, {useState} from "react";
import UnitConv from "./mydir/UnitConv";

const box = {border: '1px solid blue', padding:'20px'}

function App() {
  const [meter, setMeter] = useState('');
  const [centi, setCenti] = useState('');
//입력한 미터 값에 맞춰 변경
const handleChange = (e) => {
  setMeter(e.target.value)
}
//센티미터 값 변환
  const centiChange = (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 리로드 방지
    const numC = Number(meter) * 100; // num 값을 숫자로 변환하고 100을 곱하기
    setCenti(numC); 
  }
  return (

    <div style={box}>
      <h2>길이 환산 계산기</h2>
      <form onSubmit={centiChange}> {/* 폼이 제출될 때 changeUnit 함수가 호출 */}

        <input type="text"
                  onChange={handleChange} // 입력 필드의 값이 변경될 때 handleChange 함수가 호출
        />
        <button type="submit">계산</button> {/* 버튼을 클릭하면 폼이 제출 */}
        <UnitConv unit={meter} unitConv={centi} /> {/* UnitConv 컴포넌트에 numConv 상태를 props로 전달 */}
      </form>

    </div>
  );
}

export default App;
