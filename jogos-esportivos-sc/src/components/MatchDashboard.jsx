import {
    featuredMatches,
    recentMatches,
    upcomingMatches,
    teamUpcomingMatches,
    teams
} from "../data/matches";

import "./MatchDashboard.css";
import { useState } from "react";
import MatchModal from "./MatchModal";
import TeamModal from "./TeamModal";

export default function MatchDashboard() {
    const [selectedMatch, setSelectedMatch] = useState(null);
    const [selectedTeam, setSelectedTeam] = useState(null);
    return (
        <div className="container">

            {/* JOGOS PRINCIPAIS */}
            {featuredMatches.map((match) => (
                <div className="match-box" key={match.id}>
                    {match.live && (
                        <span className="live-badge">🔴 AO VIVO</span>
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

                    <p className="date">{match.date}</p>

                    <div className="score">
                        <Team
                            name={match.homeTeam}
                            logo={match.homeLogo}
                            onLogoClick={setSelectedTeam}
                        />

                        <span className="result">
                            {match.homeScore} - {match.awayScore}
                        </span>

                        <Team
                            name={match.awayTeam}
                            logo={match.awayLogo}
                            onLogoClick={setSelectedTeam}
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
                            match={match}
                            centerText={`${match.homeScore} - ${match.awayScore}`}
                            onClick={() => setSelectedMatch(match)}
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
                            match={match}
                            centerText={`${match.date} - ${match.time}`}
                            onClick={() => setSelectedMatch(match)}
                        />
                    ))}
                </div>
            </section>
            <section className="teams-section">

                <h2>Times</h2>

                <div className="teams-list">

                    {teams.map((team) => (
                        <button
                            key={team.id}
                            className="team-button"
                            onClick={() => setSelectedTeam(team.name)}
                        >
                            <img
                                src={team.logo}
                                alt={team.name}
                                className="bottom-team-logo"
                            />
                        </button>
                    ))}

                </div>

            </section>
            <MatchModal
                match={selectedMatch}
                onClose={() => setSelectedMatch(null)}
            />
            <TeamModal
                teamName={selectedTeam}
                matches={
                    selectedTeam
                        ? teamUpcomingMatches[selectedTeam]
                        : []
                }
                onClose={() => setSelectedTeam(null)}
            />
        </div>
    );
}

function Team({
    name,
    logo,
    onLogoClick
}) {
    return (
        <div className="team">
            <h3>{name}</h3>

            <button
                className="logo-button"
                onClick={() => onLogoClick(name)}
            >
                <img
                    src={logo}
                    alt={name}
                    className="team-logo"
                />
            </button>
        </div>
    );
}

function SmallMatchCard({
    match,
    centerText,
    onClick
}) {
    return (
        <div
            className="small-card"
            onClick={onClick}
        >
            <img
                src={match.homeLogo}
                alt="Logo do time da casa"
                className="small-logo"
            />

            <span>{centerText}</span>

            <img
                src={match.awayLogo}
                alt="Logo do time de fora"
                className="small-logo"
            />
        </div>
    );
}