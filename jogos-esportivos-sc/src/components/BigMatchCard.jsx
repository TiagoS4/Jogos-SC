import Team from "./Team";

import "./BigMatchCard.css";

export default function BigMatchCard({
    match,
    onTeamClick
}) {
    return (
        <div className="match-box">

            {match.live && (
                <span className="live-badge">
                    🔴 AO VIVO
                </span>
            )}

            <div className="match-info">
                <p className="championship">
                    {match.championship}
                </p>

                <p className="stadium">
                    📍 {match.stadium}
                </p>
            </div>

            <h2>{match.status}</h2>

            <p>{match.time}</p>

            <p>{match.time}</p>

            <p className="channels">
                📺 {match.channels?.join(" • ") || "A definir"}
            </p>

            <div className="score">

                <Team
                    name={match.homeTeam}
                    logo={match.homeLogo}
                    onLogoClick={onTeamClick}
                />

                <span className="result">
                    {match.homeScore} - {match.awayScore}
                </span>

                <Team
                    name={match.awayTeam}
                    logo={match.awayLogo}
                    onLogoClick={onTeamClick}
                />

            </div>

        </div>
    );
}