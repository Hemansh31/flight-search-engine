import './Content.css';
import { StatusBar } from './StatusBar/StatusBar';
import { FlightCard } from './FlightCard/FlightCard';
import { useSelector } from 'react-redux';

export const Content = (props) => {
    const displayParams = useSelector(state => state.update);

    const searchResults = useSelector(state => state.search);

    let flightList = null;

    if((searchResults.isFilterActive && searchResults.filteredData.length === 0) || searchResults.data.length === 0) {
        flightList = null;
    } else {
        if(searchResults.isFilterActive) {
            flightList = searchResults.filteredData.map((point) => {
                const key = `${point.dep ? point.dep.airlineId : ''}${point.ret ? point.ret.airlineId : ''}`;
                return <FlightCard key = {key} payload = {point} />
            });
        }
        else {
            flightList = searchResults.data.map((point) => {
                const key = `${point.dep ? point.dep.airlineId : ''}${point.ret ? point.ret.airlineId : ''}`;
                return <FlightCard key = {key} payload = {point} />
            });
        }
    }

    return (
        <div className = 'Content'>
            <StatusBar 
                isEmpty = {displayParams.isEmpty}
                isReturn = {displayParams.returnDate !== ''}
                sourceCity = {displayParams.sourceCity}
                destinationCity = {displayParams.destinationCity}
                departureDate = {displayParams.departureDate}
                returnDate = {displayParams.returnDate}    
            />
            <div className = 'Flights'>
                {flightList}
            </div>
        </div>
    );
};