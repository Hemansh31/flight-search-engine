import './PriceFilter.css';
import { useState } from "react";
import { Range, getTrackBackground } from 'react-range';

export const PriceFilter = ({minPrice, maxPrice, step, onChange}) => {
    const [values, setValues] = useState([minPrice, maxPrice]);
    
    const handleChange = (val) => {
        setValues(val);
        onChange(val);
    };

    return (
        <div className = 'PriceFilter'>
            <h4>Refine Flight Search</h4>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}
            >
            <Range
                values={values}
                step={step}
                min={minPrice}
                max={maxPrice}
                rtl={false}
                onChange={(values) => {
                    handleChange(values);
                }}
                renderTrack={({ props, children }) => (
                <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    style={{
                        ...props.style,
                        height: '30px',
                        display: 'flex',
                        width: '100%'
                    }}
                >
                    <div
                    ref={props.ref}
                    style={{
                        height: '8px',
                        width: '90%',
                        borderRadius: '8px',
                        background: getTrackBackground({
                            values,
                            colors: ['#ccc', '#024bb6', '#ccc'],
                            min: minPrice,
                            max: maxPrice,
                            rtl: false
                        }),
                        alignSelf: 'center',
                        margin : 'auto'
                    }}
                    >
                    {children}
                    </div>
                </div>
                )}
                renderThumb={({ props, isDragged }) => (
                <div
                    {...props}
                    style={{
                        ...props.style,
                        height: '20px',
                        width: '20px',
                        borderRadius: '5px',
                        backgroundColor: '#FFF',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxShadow: '0px 2px 6px #AAA'
                    }}
                >
                    <div
                    style={{
                        height: '16px',
                        width: '5px',
                        backgroundColor: isDragged ? '#548BF4' : '#CCC'
                    }}
                    />
                </div>
                )}
            />
            </div>
            <div className = 'PriceHolders'>
                <span style={{}}>&#x20b9; {values[0]}</span>
                <span style={{textAlign : 'right'}}>&#x20b9; {values[1]}</span>
            </div>
        </div>
    );
}