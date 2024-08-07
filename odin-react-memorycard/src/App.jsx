import { useState, useEffect } from "react";
import Card from './components/Card';
import Scoreboard from './components/Scoreboard';
import Loading from './components/Loading';

export default function App() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [round, setRound] = useState([]); 
    const [best, setBest] = useState(0); 
    const [nextRound, setNextRound] = useState(true);

    useEffect(() => {
        const buildQuery = (id) => {
            return "https://api.disneyapi.dev/character/" + id; 
        }

        const fetchData = async (rollcall) => {
            try {
                const allData = []
                for (let i = 0; i < 12; i++) {
                const response = await fetch(buildQuery(rollcall[i]), { mode : 'cors' });
                if (!response.ok) {
                    throw new Error('response error');
                }
                const result = await response.json();
                const entry = {
                    name: result.data.name, 
                    image: result.data.imageUrl,
                }
                allData.push(entry);
                }
                setData(allData);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        const run = () => {
            const rollcall = [256, 2099, 3771, 6525, 4994];

            for (let i = 0; i < 8; i++) {
                let check = Math.floor(Math.random() * 7438) + 1;
                while (rollcall.includes(check)) {
                    check = Math.floor(Math.random() * 7438) + 1;
                }
                rollcall.push(check);
            }

            fetchData(rollcall);
        }
        
        run();
    }, [])  

    if (loading) return <Loading />;
    if (error) return <div>Error: {error.message}</div>;

    console.log(data)


    const randomise = () => {
        let order = []; 
        const res = [];

        for (let i = 0; i < 12; i++) {
            let temp = Math.floor(Math.random() * 12);
            while (order.includes(temp)) {
                temp = Math.floor(Math.random() * 12);
            }
            order.push(temp);
            res.push(<Card key={temp} index={temp} charName={data[temp].name} imageUrl={data[temp].image} editRound={editRound} />)
        }
        
        return res;
    }

    const editRound = (newValue) => {
        console.log(round);
        if (round.includes(newValue)) {
            setNextRound(false);
        } else { 
            setRound([...round, newValue]);
        }
    }

    if (!nextRound) {
        alert("Game over! Your score: " + round.length);
        setBest(round.length);
        setRound([]); 
        setNextRound(true);
    }

    return (
        <>
            <Scoreboard curr={round.length} best={best}/>
            <div className="cards-area">
                {randomise()}
            </div>
        </>
    )
}