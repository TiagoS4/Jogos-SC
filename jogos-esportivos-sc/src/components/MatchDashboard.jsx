import { matches } from "../data/matches";
import "./MatchDashboard.css";

export default function MatchDashboard() {
    return (
        <div className="container">
            {matches.map((match) => (
                <div className="match-box" key={match.id}>
                    {match.live && (
                        <span className="live-badge">🔴 AO VIVO</span>
                    )}

                    <h2>{match.status}</h2>

                    <p>{match.time}</p>

                    <div className="score">
                        <div className="team">
                            <h3>{match.homeTeam}</h3>

                            <img
                                src={match.homeLogo}
                                alt={match.homeTeam}
                                className="team-logo"
                            />
                        </div>

                        <span className="result">
                            {match.homeScore} - {match.awayScore}
                        </span>

                        <div className="team">
                            <h3>{match.awayTeam}</h3>

                            <img
                                src={match.awayLogo}
                                alt={match.awayTeam}
                                className="team-logo"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}