import '../styles/Card.css';

export default function Card({ index, charName, imageUrl, editRound }) {
    
    const handleClick = () => {
        editRound(index);
    }

    return (
        <div className="card" id={"card" + index} onClick={handleClick}>
            <img src={imageUrl} alt={charName + " picture"} />
            <div className="card-name-container">
                <div className="card-name">{charName}</div>
            </div>
        </div>
    ) 
}