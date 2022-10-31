import React from 'react';
import './container.scss';

interface ContainerProps {
    children: React.ReactElement[] | React.ReactElement
}
const Container = ({ children }: ContainerProps) => {
    return (
        <div className='container'>
            {children}
        </div>
    );
};

export default Container;
