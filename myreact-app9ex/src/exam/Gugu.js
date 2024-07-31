import React, { useState } from "react";

const Gugu = () => {
  const [text, setText] = useState(2);
  const su = []; //정적인 데이터라 여기 없어도 됨

  for (let i = 0; i < 9; i++) {
    su[i] = i + 1;
  }

  const inputFunc = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      단 입력 : <input type="text" value={text} onChange={inputFunc}></input>
      <table>
        {su.map((s) => (
          <tr>
            <td>{text} </td>
            <td> × </td>
            <td>{s}</td>
            <td> =</td>
            <td>{text * s}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Gugu;
