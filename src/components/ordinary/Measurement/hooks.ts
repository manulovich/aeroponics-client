import { useContext } from 'react';
import MeasurementContext from './MeasurementContext';

const useMeasurementContext = () => {
    return useContext(MeasurementContext)
};

export {
    useMeasurementContext
};