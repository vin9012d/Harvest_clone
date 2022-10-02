import * as types from './time.types';

const initialData = {
    loading: false,
    error: false,
    timeData: []
};

export const timeReducer = (state= initialData, {type, payload}) => {
    switch (type) {
        case types.GET_TIME_LOADING:{
            return {
                ...state,
                loading: true,
                error: false
            };
        };
        case types.GET_TIME_ERROR:{
            return {
                ...state,
                loading: false,
                error: true
            };
        }
        case types.GET_TIME_SUCCESS:{
            return {
                ...state,
                loading: false,
                error: false, 
                timeData: payload
            };
        }   

        case types.POST_TIME_LOADING:{
            return {
                ...state,
                loading: false,
                error: false                
            };
        } 
        case types.POST_TIME_ERROR:{
            return {
                ...state,
                loading: false,
                error: false                
            };
        } 
        case types.POST_TIME_SUCCESS:{
            return {
                ...state,
                loading: false,
                error: false, 
                timeData: [...initialData.timeData, payload]
            };
        } 
            
        default: {
            return state;
        }
            
    }
}