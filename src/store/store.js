import { createStore, applyMiddleware,compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {authReducer} from '../reducers/authReducer'
import {cardReducer} from '../reducers/cardReducer'
import {uiReducer} from '../reducers/uiReducer'


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  auth:authReducer,
  ui:uiReducer,
  card: cardReducer
})

export const store = createStore(
 reducers,
 composeEnhancers(
   applyMiddleware(thunk)
 )
);