import './TripSelector.css';

export const TripSelector = ({ isReturn, onChange }) => {
    
    const handleClick = (event) => {
        onChange(event.target.name === 'One Way' ? false : true);
    };
    
    return (
        <div className='TripSelector'>
            <button className={`btn ${!isReturn ? 'active' : ''}`} onClick={handleClick} name = 'One Way'>One Way</button>
            <button className={`btn ${isReturn ? 'active' : ''}`} onClick={handleClick} name = 'Return'>Return</button>
        </div>
    );
}