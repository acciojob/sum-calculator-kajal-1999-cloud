import React, { useState } from "react";

const Sum = () => {
const [sum, setSum] = useStae(0);
    return (
        <div>
            <h1>Sum Calculator</h1>
            <input type='number' value={sum} onChange={
                (e) => (
                    setSum(parseInt(sum) + parseInt(e.target.value))
                )}/>
             <p>Sum: {sum}</p>
        </div>
    )
}