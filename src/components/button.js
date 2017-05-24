import React from 'react';

export default ({title, icon, handleClick}) => (
    <span onClick={ handleClick } className='btn btn-secondary btn-wrapper'>
        <i className={ icon }></i> <span className='hidden-sm-down'>{ title }</span>
    </span>
 )
