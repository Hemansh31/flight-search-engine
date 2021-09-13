import { search } from "../utils/flightsApi";
import { UPDATE_SEARCH_RESULTS } from "./actionTypes";

export const searchAction = async (searchParams) => {
    return {
        type : UPDATE_SEARCH_RESULTS,
        payload : await search(searchParams)
    };
};