import React from 'react';
const Nav = (props) => {
    // const exo = props.exo;
    const afficher = (e) => {
        let temp = [...props.exo];
        temp.forEach(element => {
            element.etat = 'd-none';
            element.lien = 'col-3';
        });
        temp[e.target.id].etat = 'block';
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
