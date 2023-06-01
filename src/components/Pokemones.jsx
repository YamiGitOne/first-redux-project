 import React from 'react'
 import { useDispatch, useSelector } from 'react-redux'
 import { obtenerPokemonesAccion, siguientePokemonAccion, anteriorPokemonAccion, unPokeDetalleAccion } from '../redux/pokeDuks'
 import Detalle from './Detalle'


 const Pokemones = () =>{
    const dispatch = useDispatch()
    const pokemones = useSelector(store => store.pokemones.results)
    const next = useSelector(store => store.pokemones.next)
    const previous = useSelector(store => store.pokemones.previous)

    console.log(pokemones)

    return(
        <div className='row'>
            <div className='col-md-6'>
                    <h3>lista de pokemones</h3>
                
                   <div className='d-flex justify-content-between'>
                        {
                                pokemones.length === 0 && 
                                <button onClick={() => dispatch(obtenerPokemonesAccion())} className="btn btn-dark">Get Pokemones</button>
                            }
                            {
                                next &&
                                <button onClick={() => dispatch(siguientePokemonAccion())} className="btn btn-dark">Siguiente</button>
                            }
                            {
                                previous &&
                                <button onClick={() => dispatch(anteriorPokemonAccion())} className="btn btn-dark">Anterior</button>
                            }
                   </div>
                    
                    <ul className="list-group mt-3">
                        {
                            pokemones.map(item => (
                                <li key={item.name} className="list-group-item">{item.name}  
                                <button
                                 className="btn btn-dark btn-sm float-end"
                                 onClick={() => dispatch(unPokeDetalleAccion(item.url))}>info</button></li>
                            ))
                        }
                    </ul>
            </div>
            <div className='col-md-6'>
                <h3>Detalle Pokemon</h3>
                <Detalle />
            </div>
        </div>
    )
 }

 export default Pokemones