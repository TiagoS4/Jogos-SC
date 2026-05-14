import "./MatchModal.css";

export default function MatchModal({
    match,
    onClose
}) {
    if (!match) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">

                <button
                    className="close-btn"
                    onClick={onClose}
                >
                    ✖
                </button>

                <h2>{match.championship}</h2>

                <p>📍 {match.stadium}</p>

                <p>{match.date}</p>

                <p>{match.status}</p>

                <div className="modal-score">
                    <div className="team">
                        <h3>{match.homeTeam}</h3>

                        <img
                            src={match.homeLogo}
                            alt="Logo do time da casa"
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
                            alt="Logo do time de fora"
                            className="team-logo"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}