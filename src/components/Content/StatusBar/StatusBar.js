import './StatusBar.css';

export const StatusBar = (props) => {
    const emptyMessage = (
        <div className = 'EmptyBar'>
            No Search Done
        </div>
    );
    const status = (
        <div className = 'StatusBar'>
            <div className = 'Places'>
                {props.sourceCity} {'>'} {props.destinationCity} {props.isReturn ? `> ${props.sourceCity}` : null}
            </div>
            <div className = 'Date'>
                <span><b>Depart :</b> {(new Date(props.departureDate)).toDateString()}</span>
                 {props.isReturn ? <span> <b>Return :</b> {(new Date(props.returnDate)).toDateString()} </span> : null}
            </div>
        </div>
    );
    return props.isEmpty ? emptyMessage : status;
};