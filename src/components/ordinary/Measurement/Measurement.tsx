import MeasurementContext from './MeasurementContext';
import './measurement.scss'

import Title from './subComponents/Title';
import TemperatureChart from './subComponents/TemperatureChart'
import Row from './subComponents/Row/Row';
import Indicators from './subComponents/Indicators';
import Report from './subComponents/Report';
import NotDateSpinner from './subComponents/NotDateSpinner';

interface MeasurementProps {
    children: any;
    isMobile: boolean;
}
const Measurement = ({ children, isMobile }: MeasurementProps) => {
    return (
        <div className='measurement'>
            <MeasurementContext.Provider value={{ isMobile }}>
                {children}
            </MeasurementContext.Provider>
        </div>
    );
};

Measurement.Title = Title;
Measurement.Chart = TemperatureChart;
Measurement.Row = Row;
Measurement.Indicators = Indicators;
Measurement.Report = Report;
Measurement.NotDateSpinner = NotDateSpinner;

export default Measurement;