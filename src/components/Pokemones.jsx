 import React from 'react'
 import { useDispatch, useSelector } from 'react-redux'
 import { obtenerPokemonesAccion, siguientePokemonAccion, anteriorPokemonAccion } from '../redux/pokeDuks'

 const Pokemones = () =>{
    const dispatch = useDispatch()
    const pokemones = useSelector(store => store.pokemones.results)
    const next = useSelector(store => store.pokemones.next)
    const previous = useSelector(store => store.pokemones.previous)

    console.log(pokemones)

    return(
        <div className='row'>
            <div className='col-md-6'>
                lista de pokemones
                <br />
                    {
                        pokemones.length === 0 && 
                        <button onClick={() => dispatch(obtenerPokemonesAccion())}>Get Pokemones</button>
                    }
                    {
                        next &&
                        <button onClick={() => dispatch(siguientePokemonAccion())}>Siguiente</button>
                    }
                    {
                        previous &&
                        <button onClick={() => dispatch(anteriorPokemonAccion())}>Anterior</button>
                    }
                    
                    <ul>
                        {
                            pokemones.map(item => (
                                <li key={item.name}>{item.name}</li>
                            ))
                        }
                    </ul>
            </div>
            <div className='col-md-6'>
                detalle de un pokemon
            </div>
        </div>
    )
 }

 export default Pokemones