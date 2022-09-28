import React from 'react';
import './Player.css'

const Player = ({ player }) => {
    const { strThumb, strBirthLocation, strPlayer } = player;
    console.log(player)
    return (
        <div className='player'>
            <h4>Name:{strPlayer}</h4>
            <img src={strThumb} alt="" />
            <p>Nationality:{strBirthLocation}</p>

            <h2>single player</h2>

        </div>
    );
};

export default Player;