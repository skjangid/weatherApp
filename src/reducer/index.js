import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistCombineReducers, persistStore } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import cities from '../reducer/modules/cities';

const config = {
  key: 'root',
  storage
};

const appReducer = {
  cities
}

const rootReducer = persistCombineReducers(config, appReducer);
store = createStore(rootReducer, compose(applyMiddleware(thunk)));
persistStore(store, null);
export default store;