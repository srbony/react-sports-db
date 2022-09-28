import React from 'react';
import './Player.css'

const Player = ({ player, cart, setCart }) => {
    const { strThumb, strBirthLocation, strPlayer } = player;
    console.log(cart)

    const addToCart = () => {
        const info = {
            strThumb,
            strBirthLocation,
            strPlayer,
            price: 115,

        };
        if (cart) {
            const newPlayer = ([info, ...cart]);
            setCart(newPlayer)

        }
        else{
            setCart([info]);
        }

    }




    return (
        <div className='player'>
            <h4>Name:{strPlayer}</h4>
            <img src={strThumb} alt="" />
            <p>Nationality:{strBirthLocation}</p>
            <button onClick={addToCart} className='player-btn'>Add To button</button>
            <button className='player-btn'>Details</button>
            <button className='player-btn'>Bookmark</button>



        </div>
    );
};

export default Player;