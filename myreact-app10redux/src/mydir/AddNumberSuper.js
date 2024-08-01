import React, { Component } from 'react';
import AddNumber from './AddNumber';

export default class AddNumberSuper extends Component{
    render() {
        return (
            <div id='super'>
                <h1>Add Number AddNumberSuper</h1>
                {/* addnumber의 props로 매개변수가 size인 함수를 전달한다. 이 함수는 addnumber의 + 버튼을 클릭했을 때 Addnumber의 state.size값을 호출한다.
                이 size값을 다시 상위 컴포넌트 App으로 전달해야 하기 때문에 상위 컴포넌트로부터 전달 받은 props의 onclick 함수를  호출해서 size값을 전달해야한다.*/}
                {/*onclick을 누르면 function을 호출(부모의 onclick함수를 호출)*/ }

                {/*
                <AddNumber onClick={function(size){
                    this.props.onClick(size);
                }.bind(this)}></AddNumber> */}{/*addnumber의 속성 onclick*/}
                    <AddNumber></AddNumber>
            </div>
        );
    }
}