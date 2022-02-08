import { useState } from 'react';

export const useForm = ( initialState = {} ) => {

    const [values, setValues] = useState(initialState);

    const rest = () => {
        setValues( initialState );
    }

    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.values
        });
    }
    
    return [ values, handleInputChange, rest ];

}