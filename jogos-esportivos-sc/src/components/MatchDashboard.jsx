import {
    championshipFeaturedMatches,
    championships,
    featuredMatches,
    recentMatches,
    upcomingMatches,
    teamUpcomingMatches,
    teams,
    todayMatches
} from "../data/matches";

import "./MatchDashboard.css";
import { useState } from "react";
import MatchModal from "./MatchModal";
import TeamModal from "./TeamModal";
import BigMatchCard from "./BigMatchCard";
import TodayMatches from "./TodayMatches";
import HelpModal from "./HelpModal";

export default function MatchDashboard() {
    const [selectedMatch, setSelectedMatch] = useState(null);
    const [selectedTeam, setSelectedTeam] = useState(null);
    const [selectedChampionship, setSelectedChampionship] =
        useState("Todos");
    const [helpOpen, setHelpOpen] = useState(false);

    const filteredMatches =
        selectedChampionship === "Todos"
            ? championshipFeaturedMatches
            : championshipFeaturedMatches.filter(
                (match) =>
                    match.championship === selectedChampionship
            );
    const isShowingAll =
        selectedChampionship === "Todos";
    //const filteredMatches = championshipFeaturedMatches.filter((match) => match.championship === selectedChampionship
    //);
    return (
        <div className="container">
            <div className="championships-container">
                {championships.map((championship) => (
                    <button
                        key={championship.id}
                        className={`championship-card ${selectedChampionship === championship.name
                            ? "active"
                            : ""
                            }`}
                        onClick={() =>
                            setSelectedChampionship(
                                championship.name
                            )
                        }
                    >
                        {championship.name}
                    </button>
                ))}
            </div>
            {
                isShowingAll ? (
                    <div className="compact-matches">
                        {filteredMatches.map((match) => (
                            <CompactMatchCard
                                key={match.id}
                                match={match}
                            />
                        ))}
                    </div>
                ) : (
                    filteredMatches.map((match) => (
                        <BigMatchCard
                            key={match.id}
                            match={match}
                            onTeamClick={setSelectedTeam}
                        />
                    ))
                )
            }

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
                    <TodayMatches matches={todayMatches} />
                    <button
                        className="help-button"
                        onClick={() => setHelpOpen(true)}
                    >
                        ?
                    </button>
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
            <HelpModal
                isOpen={helpOpen}
                onClose={() => setHelpOpen(false)}
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
            <p className="small-channels">
                📺 {match.channels?.join(" • ") || "A definir"}
            </p>
        </div>
    );
}

function CompactMatchCard({ match }) {
    return (
        <div className="compact-card">

            <p className="compact-championship">
                {match.championship}
            </p>

            <div className="compact-score">

                <img
                    src={match.homeLogo}
                    alt={match.homeTeam}
                    className="compact-logo"
                />

                <span>
                    {match.homeScore} - {match.awayScore}
                </span>

                <img
                    src={match.awayLogo}
                    alt={match.awayTeam}
                    className="compact-logo"
                />

            </div>

            <p className="compact-channels">
                📺 {match.channels?.join(" • ") || "A definir"}
            </p>

        </div>
    );
}