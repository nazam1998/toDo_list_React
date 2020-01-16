import React, { Fragment, useState } from 'react';
const Exo3 = () => {
    const [titre, setTitre] = useState('inconnu');
    const [input, setInput] = useState('');
    return (<Fragment>
        <h2>Welcome {titre}</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat consectetur provident minus, dolorum maxime excepturi natus nesciunt, perspiciatis quaerat vitae rerum pariatur aut dolores reprehenderit fugit similique laborum sapiente tempora? tout rater</p>
        <input type="text" onChange={e => setInput(e.target.value)} value={input} /><button className="btn btn-light" onClick={() => input !== '' ? setTitre(input) : setTitre('inconnu')}>go</button>
    </Fragment>)
};
export default Exo3
