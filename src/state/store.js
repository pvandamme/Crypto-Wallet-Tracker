import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))

//const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
