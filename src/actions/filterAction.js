import { FILTER_SEARCH_RESULTS } from "./actionTypes";

export const filterAction = (priceRange) => {
    return ({
        type : FILTER_SEARCH_RESULTS,
        payload : {
            min : priceRange[0],
            max : priceRange[1]
        }
    });
}