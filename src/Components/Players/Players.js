import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Player from '../Player/Player';
import './Players.css'

const Players = () => {
    const [search, setSearch] = useState('');
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
            .then(res => res.json())
            .then(data => setPlayers(data.player
            ))

    }, [search])

    // const handleInput = () => {
    //     console.log('handled input field')

    // }
    console.log(players)
    return (
        <div >
             <input onClick={(e) => setSearch(e.target.value)} type="text"  style={{marginLeft:'45%',padding:'10px',marginTop:'10px'}}/>
             <p>players:{players.length}</p>
             <div className='sports-container'>
            <div className="players-container">
               
                   
                {
                    players.map(player => <Player
                        player={player}
                        key={player.idPlayer} >
                    </Player>)
                }
             </div>
            <div className="cart-container">
                <h3>cart-container</h3>
            </div>
        </div>

        </div>
    
       
    );
};

export default Players;