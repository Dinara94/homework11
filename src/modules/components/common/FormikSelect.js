import React from 'react';
import FormikTextField from './FormikTextField';

function FormikSelect({ options, ...props }) {
    return (
        <FormikTextField
            {...props}
            select
            SelectProps={{
                native: true,
            }}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </FormikTextField>
    );
}

export default FormikSelect;