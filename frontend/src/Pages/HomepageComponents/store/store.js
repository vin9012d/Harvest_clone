import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {reducer} from "./expenseReducer/reducer"

// import all reducers here 
import { footerReducer } from './footerReducer/footer.reducer';
import { integrationsReducer } from './integrationReducer/integration.reducer';
import { timeReducer } from './timeReducer/time.reducer';

const rootReducer = combineReducers({    
    integration: integrationsReducer,
    footer: footerReducer,
    time: timeReducer,    
    expenses: reducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
