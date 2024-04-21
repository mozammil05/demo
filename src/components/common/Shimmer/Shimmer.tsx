import React from 'react';
import { shimmers } from '../../interfaces/commonLayouts';
import './Shimmer.scss';

const Shimmer :React.FC<shimmers> = (props) => {
    const {
        className,
        fluid,
        width,
        height,
        verticlyFluid,
    } = props;
    return (
        <span
            className={`shimmer ${className}`}
            style={{
                width: fluid ? '100%' : width ? `${width}px` : '60px',
                height: verticlyFluid ? '100%' : height ? `${height}px` : '60px',
            }}
        ></span>
    )
}

export default Shimmer
