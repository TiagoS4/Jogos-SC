export default function Team({
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