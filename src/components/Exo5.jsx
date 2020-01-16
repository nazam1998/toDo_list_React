import React, { Fragment, useState } from 'react';
const Exo5 = (props) => {

    const [tabImg, setTabImg] = useState([]);
    let oeuf = props.img

    const ajouter = () => {
        const temp = [...tabImg];
        temp.push(oeuf);
        setTabImg(temp);

    }

    return (<Fragment>
        <p>ajouter un oeuf à chaque clique de bouton</p>
        <button onClick={ajouter}>Ajouter un oeuf</button>
        <hr />
        <div>
            {tabImg.map((e, index) => <img src={e} key={index} alt='' className='oeuf'/>)}
        </div>
    </Fragment>)
};
export default Exo5
