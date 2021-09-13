import './Header.css';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';

export const Header = (props) => {
    return (
        <div className = 'Header'><FlightTakeoffIcon style={{fontSize : '2.2rem'}}/><span>Flight Search Engine</span></div>
    );
};