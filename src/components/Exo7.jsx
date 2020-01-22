import React, { Fragment, useState, useEffect } from 'react';


const Exo7 = () => {

    const [tache, setTache] = useState([]);
    const [show, setShow] = useState('tout');
    const [tabButton, setTabButton] = useState([{ text: 'Toutes', etat: 'text-primary gris', show: 'tout' }, { text: 'Complétées', etat: 'text-primary gris', show: 'fini' }, { text: 'à faire', etat: 'text-primary gris', show: 'faire' }]);
    // Pour gérer les boutons il faut créer un tableau correspondant à chaque bouton
    const estVide = e => {
        let vide = true;
        let i = 0;
        while (i < e.length && vide) {
            vide = e.charAt(i) === " ";
            i++;
        }
        return vide;
    }
    const ajoute = (e) => {
        if (e.key === 'Enter') {
            let temp = [...tache];
            temp.push({ text: (e.target.value !== '' ? (!estVide(e.target.value) ? e.target.value : 'Template') : 'Template'), className: 'row align-items-center justify-content-around p-1 w-100 text-left', etat: '', input: e.target.value, show: 'p' });
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
        e.target.nextElementSibling.value = temp[e.target.parentElement.id].text;
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
            temp[e.target.parentElement.id].className = temp[e.target.parentElement.id].className.replace(' checked', '');
        }

        setTache(temp);
    }
    const changeList = (e) => {
        let temp = [...tabButton];
        temp.forEach(e => {
            e.etat = e.etat.replace('btn-primary text-white', 'text-primary gris');


        });

        temp[e.target.id].etat = temp[e.target.id].etat.replace('text-primary gris', 'btn-primary text-white');

        setShow(temp[e.target.id].show);
        setTabButton(temp);
    }
    const write = event => {

        let temp = [...tache];
        temp[event.target.parentElement.id].input = event.target.value;
        setTache(temp);
    };
    return (
        <Fragment>
            <h1>Todo List</h1>
            <hr />
            <input type="text" placeholder='Que dois-je faire' onKeyPress={ajoute} className='w-100' />
            <div className="row mx-auto my-2 container justify-content-center">
                {tabButton.map((e, index) => <button key={index} id={index} className={"ml-2 col-2 btn border border-primary " + e.etat} onClick={changeList}>{e.text}</button>)}
            </div>
            <div className="tache">
                <hr />

                {show === 'tout' && tache.map((e, index) => <li className={e.className} id={index} key={index}><input type='checkbox' checked={e.etat} onChange={color} className='ml-2 col' />{(e.show === 'p' ? <p onClick={afficher} className='col-5 my-auto'>{e.text}</p> : <input type="text" onKeyPress={changer} onDoubleClick={afficher2} className='col-5' value={e.input} onChange={write} />)}<span className='offset-5 remover col' onClick={retire}>X</span></li>)}
                {show === 'fini' && tache.map((e, index) => (e.etat && <li className={e.className} id={index} key={index}><input type='checkbox' checked={e.etat} onChange={color} className='ml-2 col' />{(e.show === 'p' ? <p onClick={afficher} className='col-5 my-auto'>{e.text}</p> : <input type="text" onKeyPress={changer} onDoubleClick={afficher2} className='col-5' value={e.input} onChange={write} />)}<span className='offset-5 remover col' onClick={retire}>X</span></li>))}
                {show === 'faire' && tache.map((e, index) => (!e.etat && <li className={e.className} id={index} key={index}><input type='checkbox' checked={e.etat} onChange={color} className='ml-2 col' />{(e.show === 'p' ? <p onClick={afficher} className='col-5 my-auto'>{e.text}</p> : <input type="text" onKeyPress={changer} onDoubleClick={afficher2} className='col-5' value={e.input} onChange={write} />)}<span className='offset-5 remover col' onClick={retire}>X</span></li>))}
            </div>
        </Fragment>
    )
};
export default Exo7
