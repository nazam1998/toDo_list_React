import React, { Fragment, useState } from 'react';

const Exo1 = () => {
    const [titre, setTitre] = useState('Mon titre non modifié');
    const [color, setColor] = useState('');
    const change = () => {
        setColor('bg-primary text-danger');
        setTitre('le titre modifié');
    }
    return (
        <Fragment>
            <h1 className={color}>{titre}</h1>
            <p>liste des propriétés à retrouver dans la documentation :</p>
            <ul>
                <li>propriété1</li>
                <li>propriété2</li>
                <li>propriété3</li>
                <li>propriété4</li>
                <li>propriété5</li>
                <li>propriété6</li>
            </ul>
            <p>Changer le contenu du h2 par 'le titre modifié'</p>
            <p>Changer la couleur du h2 par le couleur que vous voulez</p>
            <p>Ajouter une class background bootstrap au h2</p>
            <button onClick={change} className='btn btn-success'>Modifier</button>
        </Fragment>
    )
};

export default Exo1
