import{legacy_createStore,combineReducers,applyMiddleware,compose} from 'redux';
import { authreducer } from './auth/auth.reducer';
import { feedsreducer } from './feeds/feeds.reducer';
import thunk from 'redux-thunk';


const rootreducer=combineReducers({
    feeds:feedsreducer,
    auth:authreducer
})
export const store = legacy_createStore(rootreducer, applyMiddleware(thunk));

