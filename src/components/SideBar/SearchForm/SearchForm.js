import './SearchForm.css';
import { useEffect, useState } from 'react';
import { CustomInput } from './CustomInput/CustomInput';


export const SearchForm = ({ onSubmit, isReturn }) => {

    const [searchParams, setSearchParams] = useState({
        sourceCity : '',
        destinationCity : '',
        departureDate : '',
        returnDate : '',
        passengerCount : 1
    });

    const [errorDetails, setErrorDetails] = useState({
        sourceCity : '',
        destinationCity : '',
        departureDate : '',
        returnDate : '',
        passengerCount : ''
    });

    const validateInput = (params) => {
        let errors = {
            sourceCity : '',
            destinationCity : '',
            departureDate : '',
            returnDate : '',
            passengerCount : ''
        };

        let arr = (Object.keys(params));

        let isValid = true;

        arr.forEach(element => {
            if(element === 'passengerCount') return;
            if(!isReturn && element === 'returnDate') return;
            if(searchParams[element] === '') {
                (errors[element] = `*required` );
                isValid = false;
            }
            return;
        });

        setErrorDetails(errors);

        return isValid;
    };

    const handleChange = (event) => {
        const changes = {[event.target.name]: event.target.type === 'number' ? +event.target.value : event.target.value};
        setSearchParams({...searchParams, ...changes});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(validateInput(searchParams)) {
            onSubmit({...searchParams});
        }
    }

    const resetFormState = () => {
        setSearchParams({
            ...searchParams,
            returnDate : ''
        });
        setErrorDetails({
            ...errorDetails,
            returnDate : ''            
        });
    }

    useEffect(resetFormState, [isReturn]);    

    return (
        <form className='SearchForm' onSubmit = { handleSubmit }>
            <CustomInput 
                type = 'text' 
                name = 'sourceCity' 
                title = 'Enter Source City' 
                value = {searchParams.sourceCity} 
                onChange = {handleChange}
                error = {errorDetails.sourceCity}
            />
            <CustomInput 
                type = 'text' 
                name = 'destinationCity' 
                title = 'Enter Destination City' 
                value = {searchParams.destinationCity} 
                onChange = {handleChange}
                error = {errorDetails.destinationCity}
            />
            <CustomInput 
                type = 'date' 
                name = 'departureDate' 
                title = 'Departure Date' 
                value = {searchParams.departureDate} 
                onChange = {handleChange}
                error = {errorDetails.departureDate}
            />
            {isReturn && <CustomInput 
                type = 'date' 
                name = 'returnDate' 
                title = 'Return Date' 
                value = {searchParams.returnDate} 
                onChange = {handleChange}
                error = {errorDetails.returnDate}
            />}
            <CustomInput 
                type = 'number' 
                name = 'passengerCount' 
                title = 'Passengers' 
                value = {searchParams.passengerCount} 
                onChange = {handleChange}
                error = {errorDetails.passengerCount}
            />
            <div style={{textAlign : 'center'}}>
                <input className='FormSubmit' type = 'submit' value = 'Search' onClick = {handleSubmit}/>
            </div>
        </form>
    );
}