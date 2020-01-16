import React, { Fragment, useState } from 'react';
const Exo7 = () => {
    const [tache, setTache] = useState([]);
    const [faire, setFaire] = useState([]);
    const [fini, setFini] = useState([]);
    const [show, setShow] = useState('tout');
    // Pour gérer les boutons il faut créer un tableau correspondant à chaque bouton
    const ajoute = (e) => {
        if (e.key === 'Enter') {
            let temp = [...tache];

            temp.push(e.target.value);
            setTache(temp);
            e.target.value = '';
        }
    }
    const changer = (e) => {
        if (e.key === 'Enter') {
            let temp = [...tache];
            temp.splice(e.target.parentElement.id, 1, e.target.value);
            setTache(temp);
            e.target.type = 'hidden';
            e.target.value = '';
        }
    }
    const afficher = (e) => {
        e.target.nextElementSibling.value = e.target.textContent;
        e.target.className = 'd-none';
        e.target.nextElementSibling.type = 'text';
    }
    const afficher2 = (e) => {
        e.target.previousElementSibling.className = '';
        e.target.type = 'hidden';
    }
    const retire = (e) => {
        let temp = [...tache];
        temp.splice(e.target.parentElement.id, 1);
        setTache(temp);

    }
    const color = (e) => {
        if (e.target.checked) {
            e.target.parentElement.className = 'row align-items-center checked';

        } else {
            e.target.parentElement.className = 'row align-items-center '
        }

    }

    return (
        <Fragment>
            <h1>Todo List</h1>
            <hr />
            <input type="text" placeholder='Que dois-je faire' onKeyPress={ajoute} className='w-100' />
            <div className="row mx-auto my-2 container justify-content-center">
                <button className="ml-2 col-2 btn border border-primary text-primary bg-secondary" onClick={() => setShow('tout')}>Toutes</button>
                <button className="ml-2 col-2 btn border border-primary text-primary bg-secondary" onClick={() => setShow('fini')}>Complétées</button>
                <button className="ml-2 col-2 btn border border-primary text-primary bg-secondary" onClick={() => setShow('faire')}>à faire</button>
            </div>
            <div className="tache">
                <hr />

                {show==='tout'? 
                tache.map((e, index) => <li className='row align-items-center justify-content-around w-100' id={index} key={index}><input type='checkbox' onClick={color} className='ml-2 col' /><p onClick={afficher} className='col'>{e}</p><input type="hidden" onKeyPress={changer} onDoubleClick={afficher2} className='col-5' /><span className='offset-5 remover col' onClick={retire}>X</span></li>): 
                fini.map((e, index) => <li className='row align-items-center justify-content-around w-100' id={index} key={index}><input type='checkbox' onClick={color} className='ml-2 col' /><p onClick={afficher} className='col'>{e}</p><input type="hidden" onKeyPress={changer} onDoubleClick={afficher2} className='col-5' /><span className='offset-5 remover col' onClick={retire}>X</span></li>)}
            </div>
        </Fragment>
    )
};
export default Exo7
