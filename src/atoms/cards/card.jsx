import React from 'react';
import './styles.scss';

const Card = ({ listdata, onClick }) => {
    return (
        <div class='cardContainer' onClick={onClick}>{listdata}</div>
    )
}

export default Card;