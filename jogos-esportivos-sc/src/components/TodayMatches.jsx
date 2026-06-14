import "./TodayMatches.css";

export default function TodayMatches({ matches }) {
    return (
        <section className="today-section">

            <h2>Jogos do Dia</h2>

            <div className="today-list">

                {matches.map((match) => (
                    <div
                        key={match.id}
                        className="today-card"
                    >

                        <p className="today-championship">
                            {match.championship}
                        </p>

                        <div className="today-score">

                            <img
                                src={match.homeLogo}
                                alt={match.homeTeam}
                                className="today-logo"
                            />

                            <div className="today-center">

                                <span className="today-result">
                                    {match.homeScore} - {match.awayScore}
                                </span>

                                <span className="today-time">
                                    {match.time}
                                </span>

                                <div className="today-center">

                                    <span className="today-channels">
                                        {match.channels?.join(" • ") || "A definir"}
                                    </span>

                                </div>

                            </div>

                            <img
                                src={match.awayLogo}
                                alt={match.awayTeam}
                                className="today-logo"
                            />

                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
}