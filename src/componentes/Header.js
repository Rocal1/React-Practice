import React from 'react';
import { Fragment } from 'react';

function Header(props) {
    return (
        <h1>{props.titulo}</h1>
    )
}

// const Header2 = ({titulo,descripcion}) => (
//     <Fragment>
//     <h1>{titulo}</h1>
//     <h2>{descripcion}</h2>
//     </Fragment>
// );

export default Header;