import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { usePokemon, type PokemonTarjeta }  from '../context/PokemonContext';

export const BuscadorPokemon: React.FC = () => {
  const { nombre, setNombre } = usePokemon('');
  const [pokemon, setPokemon] = useState('');
  const [cargando, setCargando] = useState('');
  const [mensajeError, setMensajeError] = useState('');

  const buscarPokemon = async () => {
    const nombrePokemon = nombre.trim().toLowerCase();


    const nombrePokemon = this.nombrePokemonInput().trim().toLowerCase();

    if(!nombrePokemon) return; 

    this.cargando.set(true)
    this.mensajeError.set(null);

    this.pokemonService.buscarEnAPI(nombrePokemon).subscribe({
      next: (res) => {
        this.pokemon.set({
          id:res.id,
          name: res.name.toUpperCase(),
          image: res.sprites.front_default,
          type: res.types[0].type.name,
          baseExperience: res.base_experience,
          esFavorito: false
        });
        this.cargando.set(false);
      }, error:() => {
        this.pokemon.set(null);
        this.mensajeError.set('Ojito, Pokemon no encontrado');
        this.cargando.set(false);
      }
    });
    
  }   
guardarEnEquipo(){
  const poke = this.pokemon();

  if(poke){
    this.pokemonService.guardarPokemon(poke);
    alert(`${poke.name} agregado al almacenamiento exitosamente`);
    this.pokemon.set(null);
    this.nombrePokemonInput.set('');
  }
}
}