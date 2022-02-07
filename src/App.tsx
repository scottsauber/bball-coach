import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    const [playerName, setPlayerName] = useState("");
    const [players, setPlayers] = useState<string[]>([]);

    const addPlayer = () => {
        setPlayers([...players, playerName]);
        setPlayerName("");
    };

    const updatePlayer = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPlayerName(event.target.value);
    };

    return (
        <div className="App">
            <label htmlFor="playerName">Player Name</label>
            <input id="playerName" onChange={updatePlayer} value={playerName} />
            <br />
            <button onClick={addPlayer}>Add Player</button>
            <br />
            <ul>
                {players.map((player) => (
                    <li key={player}>{player}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
