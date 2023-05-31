import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import pokeReducer from './pokeDuks'

const rootReducer = combineReducers({
    pokemones: pokeReducer
})

//configuracion para extension de Google Chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
const store = createStore( rootReducer, composeEnhancers( applyMiddleware (thunk)) )
return store;
}