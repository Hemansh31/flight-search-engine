import flightData from './flights.json';

const compareDates = (dateOne, dateTwo) => {
    if(dateOne.getFullYear() === dateTwo.getFullYear() && dateOne.getMonth() === dateTwo.getMonth() && dateOne.getDate() === dateTwo.getDate()) {
        return true;
    }
    return false;
};

const searchFlights = (data, departureDate, sourceCity, destCity, passengerCount) => {
    let departures = [];
    let others = [];

    data.forEach((flight) => {
        if(flight.sourceCityName.toLowerCase() !== sourceCity.toLowerCase() 
        && flight.sourceCityId.toLowerCase() !== sourceCity.toLowerCase()) {
            others.push(flight);
            return;
        }
        if(flight.destCityName.toLowerCase() !== destCity.toLowerCase() 
        && flight.destCityId.toLowerCase() !== destCity.toLowerCase()) {
            others.push(flight);
            return;
        }
        const depDate = new Date(flight.scheduledDeparture);

        if(!compareDates(depDate, departureDate)) {
            others.push(flight);
            return;
        }
        if((+flight.availableSeats) < (+passengerCount)) {
            others.push(flight);
            return;
        }
        departures.push(flight);
    });

    return { departures, others };
};

export const search = (searchParams) => {
    return new Promise((resolve, reject) => {
        const searchedDepartureDate = new Date(searchParams.departureDate);
        const searchedReturnDate = new Date(searchParams.returnDate);
        const searchedSourceCity = searchParams.sourceCity;
        const searchedDestinationCity = searchParams.destinationCity;
        const searchedPassengerCount = parseInt(searchParams.passengerCount);

        const finalResult = {
            departures : [],
            returns : [],
        };

        let searchResult = searchFlights(flightData.flights, searchedDepartureDate, searchedSourceCity, searchedDestinationCity, searchedPassengerCount);
        finalResult.departures = searchResult.departures;
        if(searchParams.returnDate) {
            let returnSearchResults = searchFlights(searchResult.others, searchedReturnDate, searchedDestinationCity, searchedSourceCity, searchedPassengerCount);
            finalResult.returns = returnSearchResults.departures;
        }
        resolve(finalResult);
    });
};


export const getAllFlights = () => {
    return new Promise((resolve, reject) => {
        resolve(flightData.flights);
    });
};