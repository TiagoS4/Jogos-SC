import "./TeamModal.css";

export default function TeamModal({
    teamName,
    matches,
    onClose
}) {
    if (!teamName) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">

                <button
                    className="close-btn"
                    onClick={onClose}
                >
                    ✖
                </button>

                <h2>
                    Próximos jogos do {teamName}
                </h2>

                <div className="team-games">
                    {matches.map((match) => (
                        <div
                            key={match.id}
                            className="team-game-card"
                        >
                            <h3>{match.opponent}</h3>

                            <p>{match.date}</p>

                            <p>{match.time}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}