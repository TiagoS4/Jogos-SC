export default function HelpModal({
    isOpen,
    onClose
}) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">

                <button
                    className="close-btn"
                    onClick={onClose}
                >
                    ✖
                </button>

                <h2>Ajuda</h2>

                <p>
                    Clique nos jogos para ver mais
                    informações.
                </p>

                <p>
                    Clique nos escudos para ver os
                    próximos jogos do time.
                </p>

                <p>
                    Use os campeonatos para filtrar
                    as partidas.
                </p>

            </div>
        </div>
    );
}