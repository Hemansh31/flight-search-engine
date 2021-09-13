import './FlightCard.css';
import { getFlightPrice } from '../../../reducers/searchReducer';

const flightBooked = () => {
    alert('Your Flight is Booked');
}

const getTime = (dateString) => {
    const date = new Date(dateString);
    const hour = (date.getHours() % 12) + (date.getHours() % 12 === 0 ? 12 : 0);
    const minutes = date.getMinutes();
    return `${hour < 10 ? '0' : ''}${hour}.${minutes < 10 ? '0' : ''}${minutes} ${date.getHours() >= 12 ? 'PM' : 'AM'}`;
};

export const FlightCard = (props) => {
    return (
        <div className = 'FlightCard'>
            <div className = 'details'>
                <span className = 'cost'>&#x20b9; {getFlightPrice(props.payload)}</span>
                <div className = 'wrapper'>
                    {props.payload.dep && <div className = 'one-way'>
                        <span style = {{fontSize : '1rem'}}>{props.payload.dep.airlineId}</span>
                        <span style = {{fontSize : '1.5rem', fontWeight : 500}}>{props.payload.dep.sourceCityId} {'>'} {props.payload.dep.destCityId}</span>
                        <span style = {{fontSize : '1.2rem'}}>Depart : {getTime(props.payload.dep.scheduledDeparture)} </span>
                        <span style = {{fontSize : '1.2rem'}}>Arrive : {getTime(props.payload.dep.scheduledArrival)}</span>
                    </div>}
                    {props.payload.ret && <div className = 'return'>
                        <span style = {{fontSize : '1rem'}}>{props.payload.ret.airlineId}</span>
                        <span style = {{fontSize : '1.5rem', fontWeight : 500}}>{props.payload.ret.sourceCityId} {'>'} {props.payload.ret.destCityId}</span>
                        <span style = {{fontSize : '1.2rem'}}>Depart : {getTime(props.payload.ret.scheduledDeparture)}</span>
                        <span style = {{fontSize : '1.2rem'}}>Arrive : {getTime(props.payload.ret.scheduledArrival)}</span>
                    </div>}
                </div>
                
            </div>
            <div className = 'banner'>
                <img className = 'logo' src = {process.env.PUBLIC_URL + 'flight.jpg'} alt = 'Airlines Logo'/>
                <button className = 'btn' onClick = {flightBooked}>Book Flight</button>
            </div>
        </div>
    );
};