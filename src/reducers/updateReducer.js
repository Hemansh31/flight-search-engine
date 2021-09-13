import { UPDATE_SEARCH_PARAMETERS } from "../actions/actionTypes";

const initialState = {
    isEmpty : true,
    sourceCity : '',
    destinationCity : '',
    departureDate : '',
    returnDate : ''
};

export const updateReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_SEARCH_PARAMETERS:
            let newState = {
                isEmpty : false,
                sourceCity : action.payload.sourceCity,
                destinationCity : action.payload.destinationCity,
                departureDate : action.payload.departureDate,
                returnDate : action.payload.returnDate
            };
            return newState;
        default:
            return state;
    }
}