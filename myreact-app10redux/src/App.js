import './App.css';
import React, { Component } from 'react';
import AddNumberSuper from './mydir/AddNumberSuper';
import ShowNumberSuper from './mydir/ShowNumberSuper';

class App extends Component {
  state = {number:0}
  render() {
    return (
      <div className='App'>
        <h1>Main</h1>
        {/*App소유 state변수 number + size(Addnumbersuper가 전달한 값 */}
        {/* 
        <AddNumberSuper onClick={function(size){
          this.setState({number:this.state.number + size})
        }.bind(this)}></AddNumberSuper>
       App number:{this.state.number}
        <ShowNumberSuper number={this.state.number}></ShowNumberSuper>
          */}
        {/*함수를 올려받고 내렵다을때는 값을 내려보냄*/}

        <AddNumberSuper></AddNumberSuper>
        <ShowNumberSuper></ShowNumberSuper>
      </div>
    );
  }
}

export default App;
