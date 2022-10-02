import {INTEGRATIONS_LOADING, INTEGRATIONS_ERROR, INTEGRATIONS_SUCCESS} from './integration.types';

const initialData = {
    loading: false,
    error: false,
    data: []
};

export const integrationsReducer = (state=initialData, action) => {
    switch(action.type){
        case INTEGRATIONS_LOADING: {
            return {
                ...state,
                loading: true,
                error: false,                
            };
        };

        case INTEGRATIONS_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,                
            };
        };

        case INTEGRATIONS_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                data: action.payload                
            };
        };

        default: {
            return state;
        };
    };
};

