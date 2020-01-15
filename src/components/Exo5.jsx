import React, { Fragment, useState } from 'react';
const Exo5 = (props) => {
    const [img, setImg] = useState([]);
    const ajouter = () => {
        let temp = img.splice();
        temp.push(<img src={props.img} />);
        setImg(temp);
    }
    return (<Fragment>
        <p>ajouter un oeuf à chaque clique de bouton</p>
        <button onClick={ajouter}>Ajouter un oeuf</button>
        <hr />
        {img.map(e => e)}
    </Fragment>)
};
export default Exo5
