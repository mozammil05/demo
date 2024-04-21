import React, { ReactNode } from 'react';
import { Errors } from '../../../interfaces/commonLayouts';
import './ErrorMsg.scss';

const ErrorMsg :React.FC<Errors> = (props) => {
    const {className,msg} = props;
    return (
        <p className={`error-msg ${className}`}>{msg}</p>
    )
}

export default ErrorMsg
