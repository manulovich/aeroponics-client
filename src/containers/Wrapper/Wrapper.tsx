import React from 'react';
import { getClassNameWithModifiers } from '../../core/utils/className';
import './wrapper.scss';

interface WrapperProps {
    isBoxSchadow: boolean;
    children: React.ReactElement[] | React.ReactElement
}
const Wrapper = ({isBoxSchadow, children}: WrapperProps) => {
    const className = getClassNameWithModifiers({
        className: 'wrapper',
        modifiers: [
            ['wrapper--with-schadow', isBoxSchadow]
        ]
    });

    return (
        <div className={className}>
            {children}
        </div>
    );
};

export default Wrapper;
