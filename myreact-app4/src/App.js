
import React, {useState} from 'react';
import Subject from './mydir/Subject';
import Welcome from './mydir/Func';

// const App = ()m => {}
function App() {
  const [subject, setSubject] = useState({title:'웹문서', subtitle:'리액트 만세'});
  const [friends] = useState([
    {bun: 1, irum:'관우', nai:33},
    {bun: 2, irum:'장비', nai:23}
  ]);

  const handelChangePage = () => {
    //friends 배열 값을 콘솔에 출력
    friends.forEach(friend => {
      console.log(`${friend.bun}번 ${friend.irum}님 나이는 ${friend.nai}살`)
    });
 
    setSubject(prevSubject => ({ //이전 상태인 prevSubject(subject)을 받아 변환
      ...prevSubject, 
      title:'버튼에 의해 제목 변경'     
    }));
  }
  return (
    <div className="App">
      이벤트 연습
      <Subject 
        title = {subject.title}
        subtitle = {subject.subtitle}
        changePage = {handelChangePage}
        />
        {/* onchangePage : App에서 subject 컴포넌트로 전달되는 이벤트 핸들러 */}
    
        <br/>
        <Welcome
          subtitle = {subject.subtitle}
          friends = {friends}
          changePage = {handelChangePage}
          />
    </div>
  );
}

export default App;