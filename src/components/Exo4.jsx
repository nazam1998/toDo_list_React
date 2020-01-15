import React, { Fragment, useState } from 'react';
const Exo4 = () => {
    const [count, setCount] = useState(0);
    return (<Fragment>
        <h1>Déplacer les élément</h1>
        <div className="row mx-auto">
            <div className="col-5 rectangle bg-primary">
                {count % 2 == 0 && <div className="carre bg-danger"></div>}
            </div>

            <div className="col-5 offset-1 rectangle bg-primary">
                {count % 2 == 1 && <div className="carre bg-danger"></div>}
            </div>
        </div>
        <div className="text-center mt-5 row flex-column w-25 mx-auto">
            <button className='btn btn-warning' onClick={() => setCount(count + 1)}>changer de place</button>
            <button className='btn btn-success mt-2'>Nombre de clicks: {count}</button>
        </div>

    </Fragment>)
};
export default Exo4
