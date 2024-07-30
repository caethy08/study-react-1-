import React, {memo} from "react"

const box = {border: '1px solid blue', padding:'20px'}

const UnitConv = (meter, setCenti) => {
    return(
        <div style={box}>
            미터 : {meter}
            센티미터 : {setCenti}
        </div>
    );
}
export default memo(UnitConv);
