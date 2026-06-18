import "./ChampionshipTable.css";

export default function ChampionshipTable({
    title,
    standings
}) {
    return (
        <section className="table-section">

            <h2>{title}</h2>

            <table className="standings-table">

                <thead>
                    <tr>
                        <th>#</th>
                        <th>Time</th>
                        <th>PTS</th>
                        <th>J</th>
                        <th>V</th>
                        <th>E</th>
                        <th>D</th>
                    </tr>
                </thead>

                <tbody>
                    {standings.map((team) => (
                        <tr key={team.position}>

                            <td>
                                {team.position}
                            </td>

                            <td className="team-column">

                                <img
                                    src={team.logo}
                                    alt={team.team}
                                    className="table-logo"
                                />

                                {team.team}

                            </td>

                            <td>{team.points}</td>

                            <td>{team.games}</td>

                            <td>{team.wins}</td>

                            <td>{team.draws}</td>

                            <td>{team.losses}</td>

                        </tr>
                    ))}
                </tbody>

            </table>

        </section>
    );
}