import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import config from '../../config';

const Home = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const response = await axios.get(`${config.apiBaseUrl}/pokemon?offset=0&limit=1320`);
                setPokemons(response.data.results);
            } catch (error) {
                console.error('Erreur lors de la récupération des Pokémon:', error);
            }
        };

        fetchPokemons();
    }, []);

    return (
        <div>
            <h1>Liste des Pokémon</h1>
            <div className="pokemons">
                {pokemons.map(pokemon => (
                    <div key={pokemon.name} className="pokemon">
                        <h2>{pokemon.name}</h2>
                        <Link to={`/pokemon/${pokemon.name}`}>Voir Détails</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
 