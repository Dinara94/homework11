import { Button } from '@material-ui/core';
import { useFormikContext } from 'formik';
import React from 'react';

function FormikButton({ children, ...props }) {
    const { isValid } = useFormikContext();

    return (
        <Button type="submit" {...props} disabled={!isValid}>
            {children}
        </Button>
    );
}

export default FormikButton;