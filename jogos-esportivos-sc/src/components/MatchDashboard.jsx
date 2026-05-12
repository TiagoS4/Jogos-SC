import {
    featuredMatches,
    recentMatches,
    upcomingMatches
} from "../data/matches";

import "./MatchDashboard.css";

export default function MatchDashboard() {
    return (
        <div className="container">

            {/* JOGOS PRINCIPAIS */}
            {featuredMatches.map((match) => (
                <div className="match-box" key={match.id}>
                    {match.live && (
                        <span className="live-badge">🔴 AO VIVO</span>
                    )}

                    <h2>{match.status}</h2>

                    <p>{match.time}</p>

                    <div className="score">
                        <Team
                            name={match.homeTeam}
                            logo={match.homeLogo}
                        />

                        <span className="result">
                            {match.homeScore} - {match.awayScore}
                        </span>

                        <Team
                            name={match.awayTeam}
                            logo={match.awayLogo}
                        />
                    </div>
                </div>
            ))}

            {/* ÚLTIMOS JOGOS */}
            <section className="small-section">
                <h2>Últimos jogos</h2>

                <div className="small-cards">
                    {recentMatches.map((match) => (
                        <SmallMatchCard
                            key={match.id}
                            homeLogo={match.homeLogo}
                            awayLogo={match.awayLogo}
                            centerText={`${match.homeScore} - ${match.awayScore}`}
                        />
                    ))}
                </div>
            </section>

            {/* PRÓXIMOS JOGOS */}
            <section className="small-section">
                <h2>Próximos jogos</h2>

                <div className="small-cards">
                    {upcomingMatches.map((match) => (
                        <SmallMatchCard
                            key={match.id}
                            homeLogo={match.homeLogo}
                            awayLogo={match.awayLogo}
                            centerText={match.time}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

function Team({ name, logo }) {
    return (
        <div className="team">
            <h3>{name}</h3>

            <img
                src={logo}
                alt={name}
                className="team-logo"
            />
        </div>
    );
}

function SmallMatchCard({
    homeLogo,
    awayLogo,
    centerText
}) {
    return (
        <div className="small-card">
            <img src={homeLogo} className="small-logo" />

            <span>{centerText}</span>

            <img src={awayLogo} className="small-logo" />
        </div>
    );
}