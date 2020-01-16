import React, { useState } from 'react';
const Niveau1 = () => {
    const [result, setResult] = useState('?');
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    return (
        <div className="niveau1">
            <h1>Niveau 1</h1>
            <div className="row">
                <input type="text" value={input1} onChange={(e) => setInput1(e.target.value)} />
                <span className='mx-2'> + </span>
                <input type="text" value={input2} onChange={(e) => setInput2(e.target.value)} />
                <button className='mx-1' onClick={() => setResult(Number(input1) + Number(input2))}>=</button>
                <span>{result}</span>
            </div>
        </div>
    )
};
export default Niveau1
