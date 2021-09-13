import './CustomInput.css';

export const CustomInput = (props) => {
    return (
        <div className = 'CustomInput'>
            <label>{props.title}</label>
            <input type={props.type} name={props.name} value={props.value} onChange={props.onChange} />
            <span className = 'error'>{props.error}</span>
        </div>
    );
}