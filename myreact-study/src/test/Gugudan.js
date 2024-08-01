import React from 'react';


const Gugudan = ({dan}) => {
    
    const num = [];

    for (let i = 1; i <= 9; i++) {
        num[i] = i;
    }
    return (
        <div >
            <table>
                {num.map((s) => (
                    <tr>
                        <td>{dan}</td>
                        <td>*</td>
                        <td>{s}</td>
                        <td>=</td>
                        <td>{dan * s}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
   
};
Gugudan.defaultProps = {
    dan:"3"
}
export default Gugudan;