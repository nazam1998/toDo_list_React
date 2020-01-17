import React, { useState } from 'react';

import Egg from './img/egg.png';

import Nav from './components/Nav';
import Exo1 from './components/Exo1';
import Exo2 from './components/Exo2';
import Exo3 from './components/Exo3';
import Exo4 from './components/Exo4';
import Exo5 from './components/Exo5';
import Exo6 from './components/Exo6';
import Exo7 from './components/Exo7';

const App = () => {
    const [exo, setExo] = useState([
        { div: <Exo1 />, etat: "block", lien: 'col-3' },
        { div: <Exo2 />, etat: "hide", lien: 'col-3' },
        { div: <Exo3 />, etat: "hide", lien: 'col-3' },
        { div: <Exo4 />, etat: "hide", lien: 'col-3' },
        { div: <Exo5 img={Egg} />, etat: "hide", lien: 'col-3' },
        { div: <Exo6 />, etat: "hide", lien: 'col-3' },
        { div: <Exo7 />, etat: "hide", lien: 'col-3' }
    ]);

    return (
        <div>
            <h1 className='text-center bg-primary text-white'>React JS</h1>
            <div className='container w-75'>
                <Nav exo={exo} setExo={setExo} />
                {exo.map((e, index) => e.etat === 'block' && <div className={'gris p-5 mt-4'} key={index}>{e.div}</div>)}

            </div>
        </div>
    )
};
export default App;