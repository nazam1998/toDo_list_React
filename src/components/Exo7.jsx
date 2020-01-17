import React, { Fragment, useState, useEffect } from 'react';


const Exo7 = () => {

    const [tache, setTache] = useState([]);
    const [show, setShow] = useState('tout');

    // Pour gérer les boutons il faut créer un tableau correspondant à chaque bouton
    const ajoute = (e) => {
        if (e.key === 'Enter') {
            let temp = [...tache];
            temp.push({ text: e.target.value, className: 'row align-items-center justify-content-around w-100', etat: '', show: 'p' });
            setTache(temp);

            e.target.value = '';
        }
    }

    const changer = (e) => {
        if (e.key === 'Enter') {
            let temp = [...tache];
            temp[e.target.parentElement.id].text = e.target.value;
            e.target.previousElementSibling.innerText = e.target.value;
            temp[e.target.parentElement.id].show = 'p';
            setTache(temp);
        }
    }
    const afficher = (e) => {
        let temp = [...tache];
        e.target.nextElementSibling.value = e.target.textContent;
        temp[e.target.parentElement.id].show = '';
        setTache(temp);

    }
    const afficher2 = (e) => {
        let temp = [...tache];
        temp[e.target.parentElement.id].show = 'p';
        e.target.previousElementSibling.textContent = e.target.value;
        setTache(temp);


    }
    const retire = (e) => {
        let temp = [...tache];
        temp.splice(e.target.parentElement.id, 1);
        setTache(temp);
    }
    const color = (e) => {
        let temp = [...tache];
        if (e.target.checked) {
            temp[e.target.parentElement.id].className += ' checked';
            temp[e.target.parentElement.id].etat = true;
        } else {
            temp[e.target.parentElement.id].etat = false;
            temp[e.target.parentElement.id].className.replace(' checked', '');
        }
        setTache(temp);
    }

    return (
        <Fragment>
            <h1>Todo List</h1>
            <hr />
            <input type="text" placeholder='Que dois-je faire' onKeyPress={ajoute} className='w-100' />
            <div className="row mx-auto my-2 container justify-content-center">
                <button className="ml-2 col-2 btn border border-primary text-primary gris" onClick={() => setShow('tout')}>Toutes</button>
                <button className="ml-2 col-2 btn border border-primary text-primary gris" onClick={() => setShow('fini')}>Complétées</button>
                <button className="ml-2 col-2 btn border border-primary text-primary gris" onClick={() => setShow('faire')}>à faire</button>
            </div>
            <div className="tache">
                <hr />

                {show === 'tout' && tache.map((e, index) => <li className={e.className} id={index} key={index}><input type='checkbox' checked={e.etat} onChange={color} className='ml-2 col' />{(e.show==='p'?<p onClick={afficher} className='col'>{e.text}</p>:<input type="text" onKeyPress={changer} onDoubleClick={afficher2} className='col-5' />)}<span className='offset-5 remover col' onClick={retire}>X</span></li>)}
                {show === 'fini' && tache.map((e, index) => (e.etat && <li className={e.className} id={index} key={index}><input type='checkbox' checked={e.etat} onChange={color} className='ml-2 col' />{(e.show==='p'?<p onClick={afficher} className='col'>{e.text}</p>:<input type="text" onKeyPress={changer} onDoubleClick={afficher2} className='col-5' />)}<span className='offset-5 remover col' onClick={retire}>X</span></li>))}
                {show === 'faire' && tache.map((e, index) => (!e.etat && <li className={e.className} id={index} key={index}><input type='checkbox' checked={e.etat} onChange={color} className='ml-2 col' />{(e.show==='p'?<p onClick={afficher} className='col'>{e.text}</p>:<input type="text" onKeyPress={changer} onDoubleClick={afficher2} className='col-5' />)}<span className='offset-5 remover col' onClick={retire}>X</span></li>))}
            </div>
        </Fragment>
    )
};
export default Exo7
