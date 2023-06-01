import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { unPokeDetalleAccion } from '../redux/pokeDuks'


const Detalle = () => {
    const dispatch = useDispatch()
    React.useEffect(() => {
        const fetchData = () =>{
            dispatch(unPokeDetalleAccion())
        }
        fetchData()
    },[dispatch])
    const pokemon = useSelector(store => store.pokemones.unPokemon)
    return pokemon ? (
        <div className='card mt-4'>
            <div className='card-body text-center'>
                <img src={pokemon.foto} className='img-fluid' />
                <div className='card-title text-uppercase'>{pokemon.nombre}</div>
                <p className='cad-text'>Alto: {pokemon.alto} | Ancho {pokemon.ancho}</p>
            </div>
           
        </div>
    ) : null
}

export default Detalle;