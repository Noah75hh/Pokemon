import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import config from '../../config';

const Pokemon = () => {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await axios.get(`${config.apiBaseUrl}/pokemon/${name}`);
                setPokemon(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération du Pokémon:', error);
            }
        };

        fetchPokemon();
    }, [name]);

    if (!pokemon) {
        return <h2>Pokémon non trouvé</h2>;
    }

    return (
        <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>Type: {pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
            <p>Poids: {pokemon.weight}</p>
            <p>Taille: {pokemon.height}</p>
        </div>
    );
};

export default Pokemon;
