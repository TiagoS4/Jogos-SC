import { useEffect, useState } from "react";
import "./MatchDashboard.css";

export default function MatchDashboard() {
    const [match, setMatch] = useState(null);

    async function fetchMatch() {
        const response = await fetch("http://localhost:3001/matches/1");
        const data = await response.json();

        setMatch(data);
    }

    useEffect(() => {
        fetchMatch();

        // Atualiza automaticamente a cada 2 segundos
        const interval = setInterval(fetchMatch, 2000);

        return () => clearInterval(interval);
    }, []);

    if (!match) {
        return <h1>Carregando...</h1>;
    }

    return (
        <div className="container">
            <div className="match-box">
                <h2>{match.status}</h2>

                <p className="time">{match.time}</p>

                <div className="score">
                    <div>
                        <h3>{match.homeTeam}</h3>
                    </div>

                    <span>
                        {match.homeScore} - {match.awayScore}
                    </span>

                    <div>
                        <h3>{match.awayTeam}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}