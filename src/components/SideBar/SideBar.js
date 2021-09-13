import './SideBar.css';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchAction } from "../../actions/searchAction";
import { TripSelector } from './TripSelector/TripSelector';
import { PriceFilter } from './PriceFilter/PriceFilter';
import { SearchForm } from './SearchForm/SearchForm';
import { filterAction } from '../../actions/filterAction';
import { updateAction } from '../../actions/updateAction';


export const SideBar = (props) => {

    const dispatch = useDispatch();

    const [isReturn, setReturn] = useState(false);

    const handleReturnChange = (val) => {
        setReturn(val);
    };

    const handleFilter = (priceParams) => {
        dispatch(filterAction(priceParams));
    }

    const handleSubmit = async (searchParams) => {
        dispatch(updateAction(searchParams));
        dispatch(await searchAction(searchParams));
    };

    return (
        <div className = 'SideBar'>
            <TripSelector 
                isReturn={isReturn}
                onChange={handleReturnChange}
            />
            <SearchForm 
                onSubmit = {handleSubmit}
                isReturn = {isReturn}
            />
            <PriceFilter 
                minPrice = {0}
                maxPrice = {30000}
                step = {100}
                onChange = {handleFilter}
            />
        </div>
        );
};