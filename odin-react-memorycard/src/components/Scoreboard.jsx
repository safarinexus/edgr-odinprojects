import '../styles/Scoreboard.css';

export default function Scoreboard( {curr, best} ) {
    return (
        <div className="scoreboard">
            <h2>Top Score: {best}</h2>
            <h2>Current Score: {curr}</h2>
        </div>
    )
}