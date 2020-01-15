import React from 'react';
const Nav = (props) => {
    const exo = props.exo;
    const liens = exo.map((e, index) =>
        <a className='col-4' href='#' key={index} id={index}>Exercice{index}</a>
    );

    const afficher = (e) => {
        // exo[e.id].etat = '';
    }
    liens.forEach(elem => {
        elem.onClick = afficher(elem);
    });
    return (
        <nav className='row'>
            {liens.map(e => e)}
        </nav>
    )
};
export default Nav
