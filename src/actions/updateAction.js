import { UPDATE_SEARCH_PARAMETERS } from "./actionTypes";

export const updateAction = (params) => {
    return ({
        type : UPDATE_SEARCH_PARAMETERS,
        payload : params
    });
}