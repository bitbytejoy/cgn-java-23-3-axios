import {useEffect, useState} from 'react'
import './App.css'
import axios, {AxiosError} from "axios";

// 1 Zeigt die Komponent
// 2 useEffect führt man einen HTTP Get aus
// 3 setX - um daten in eine Variabel zu abspeichern

function App() {
    console.log("App");
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const x = {name: "Test"};

    return (
        <div>
            <pre>{JSON.stringify(data)}</pre>
            <button onClick={() => {
                axios.post('https://rickandmortyapi.com/api/character', x)
                    .then(response => {
                        setData(response.data);
                    })
                    .catch(error => {
                        alert((error as AxiosError).response?.status);
                    });
            }}>SEND</button>
        </div>
    );
}

export default App
