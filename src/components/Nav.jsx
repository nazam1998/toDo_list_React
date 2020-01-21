import React from 'react';

const Nav = (props) => {

    const afficher = (e) => {

        let temp = [...props.exo];
        console.log(temp);

        temp.forEach(element => {
            element.etat = 'hide';
            element.lien = 'col-3';
        });

        temp[e.target.id].etat = 'banane';
        temp[e.target.id].lien = 'col-3 bg-primary text-white';
        props.setExo(temp);
    }

    return (
        <nav className='row'>
            {props.exo.map((e, index) => <a className={e.lien} onClick={afficher} href='#' key={index} id={index}>Exercice{index + 1}</a>)}
        </nav>
    )
};

export default Nav