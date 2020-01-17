import React, { useState } from 'react';

const Niveau2 = () => {
    const [input, setInput] = useState('');
    const [p, setP] = useState('');
    const [op, setOp] = useState('');
    const [nb, setNb] = useState('');
    const [nb2, setNb2] = useState('');
    const [save, setSave] = useState('');
    let tab = [{ nb: nb, fct: setNb }, { nb: nb2, fct: setNb2 }]
    const [count, setCount] = useState(0);
    const egal = () => {
        setP(p + save);
        switch (op) {
            case '+':
                setP(save + ' = ' + (Number(nb) + Number(nb2)));
                break;
            case '-':
                setP(save + ' = ' + (Number(nb) - Number(nb2)));
                break;
            case '*':
                setP(save + ' = ' + (Number(nb) * Number(nb2)));
                break;
            case '/':
                setP(save + ' = ' + (Number(nb) / Number(nb2)));
                break;
            default:
                setP('SyntaxError');

        }
        setInput('')
        setOp('');
        setNb('');
        setNb2('');
        setSave('');
        setCount(0);
    }
    return (
        <div className='niveau2 mt-5'>
            <h1>Niveau2</h1>
            <div className="calculatrice  bg-dark text-white p-5 w-50">
                <div className="resultat w-75">
                    <p className='text-right'>{p}</p>
                    <input type="text" className='text-dark' value={input} onChange={() => setInput(input)} />
                </div>
                <div className="boutons">
                    <button className="btn btn-light col-2 ml-2 mt-3" onClick={() => { setInput(input + '1'); setSave(save + '1'); tab[count].fct(tab[count].nb + '1') }}>1</button>
                    <button className="btn btn-light col-2 ml-2 mt-3" onClick={() => { setInput(input + '2'); setSave(save + '2'); tab[count].fct(tab[count].nb + '2') }}>2</button>
                    <button className="btn btn-light col-2 ml-2 mt-3" onClick={() => { setInput(input + '3'); setSave(save + '3'); tab[count].fct(tab[count].nb + '3') }}>3</button>
                    <div className="btn btn-primary col-2 ml-2 mt-3" onClick={() => { setOp('+'); setP(save + '+'); setSave(save + '+'); setInput(''); setCount((count + 1) % 2) }}>+</div>
                    <div className="w-100"></div>
                    <button className="btn btn-light col-2 ml-2 mt-3" onClick={() => { setInput(input + '4'); setSave(save + '4'); tab[count].fct(tab[count].nb + '4') }}>4</button>
                    <button className="btn btn-light col-2 ml-2 mt-3" onClick={() => { setInput(input + '5'); setSave(save + '5'); tab[count].fct(tab[count].nb + '5') }}>5</button>
                    <button className="btn btn-light col-2 ml-2 mt-3" onClick={() => { setInput(input + '6'); setSave(save + '6'); tab[count].fct(tab[count].nb + '6') }}>6</button>
                    <div className="btn btn-primary col-2 ml-2 mt-3" onClick={() => { setOp('-'); setP(save + '-'); setSave(save + '-'); setInput(''); setCount((count + 1) % 2) }}>-</div>
                    <div className="w-100"></div>
                    <button className="btn btn-light col-2 ml-2 mt-3" onClick={() => { setInput(input + '7'); setSave(save + '7'); tab[count].fct(tab[count].nb + '7') }}>7</button>
                    <button className="btn btn-light col-2 ml-2 mt-3" onClick={() => { setInput(input + '8'); setSave(save + '8'); tab[count].fct(tab[count].nb + '8') }}>8</button>
                    <button className="btn btn-light col-2 ml-2 mt-3" onClick={() => { setInput(input + '9'); setSave(save + '9'); tab[count].fct(tab[count].nb + '9') }}>9</button>
                    <div className="btn btn-primary col-2 ml-2 mt-3" onClick={() => { setOp('*'); setP(save + '*'); setSave(save + '*'); setInput(''); setCount((count + 1) % 2) }}>*</div>
                    <div className="w-100"></div>
                    <div className="btn btn-danger col-2 ml-2 mt-3" onClick={() => { setInput(''); setP(0); setCount(0); setNb(''); setNb2(''); setSave('') }}>C</div>
                    <button className="btn btn-light col-2 ml-2 mt-3" onClick={() => { setInput(input + '0'); setSave(save + '0'); tab[count].fct(tab[count].nb + '0') }}>0</button>
                    <div className="btn btn-success col-2 ml-2 mt-3" onClick={egal}>=</div>
                    <div className="btn btn-primary col-2 ml-2 mt-3" onClick={() => { setOp('/'); setP(save + '/'); setSave(save + '/'); setInput(''); setCount((count + 1) % 2) }}>/</div>
                </div>
            </div>
        </div>
    )
};
export default Niveau2
