import React from 'react';

const Cell = ({status, newBorn, handleClick}) =>(
    <td className={`${status ? 'alive' : ''} ${newBorn ? 'new-born': ''}`}
        onClick={ handleClick }></td>
);

export default Cell;
