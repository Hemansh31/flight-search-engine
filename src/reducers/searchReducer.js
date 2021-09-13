import { UPDATE_SEARCH_RESULTS , FILTER_SEARCH_RESULTS } from "../actions/actionTypes";

const initialState = { data : [], filteredData : [], isFilterActive : false };

export const getFlightPrice = (flight) => {
    const dep = flight.dep;
    const ret = flight.ret;
    return (dep ?  dep.travelCost:0) + (ret ?  ret.travelCost:0);
}

const filterSearchResults = (data, filterParams) => {
    return data.filter((flight) => {
        const flightPrice = getFlightPrice(flight);
        return filterParams.min <= flightPrice  && flightPrice <= filterParams.max;
    });
}

const updateSearchResults = (flights) => {
    const departures = flights.departures || [];
    const returns    = flights.returns || [];
    let result =  departures.map((flight) => {
        let res =  [];
        if(returns.length > 0) {
            returns.forEach((retFlight) => {
                res = res.concat([{dep: flight, ret : retFlight}]);
            });
            return res;
        } else {
            return [{dep: flight}]
        }
    });

    return [].concat(...result);
}


export const searchReducer = (state = initialState, action) => {

    switch (action.type) {
  
      case UPDATE_SEARCH_RESULTS:
          return {
              ...state,
              isFilterActive : false,
              data           : updateSearchResults(action.payload),
              filteredData   : []
          };
  
      case FILTER_SEARCH_RESULTS:
        return {
            ...state,
            isFilterActive : true,
            filteredData   : filterSearchResults(state.data, action.payload)
        };
  
      default:
        return state;
    }
}
