import { execTemperatureFromMeasurements } from '../../utils';
import { useMainContext } from '../../hooks';
import Measurement from '../../../Measurement';
import './performanceIndicators.scss';

const PerformanceIndicators = () => {
    const { isMobile, selectedExperiment, selectedDevice } = useMainContext();
 
    if (!selectedDevice) return null;
    if (!selectedExperiment || selectedExperiment.measurements.length === 0) {
        return (
            <Measurement isMobile={isMobile}>
                <Measurement.Title>
                    Нет данных для отображения
                </Measurement.Title>

                <Measurement.NotDateSpinner />
            </Measurement>
        );
    }

    const measurement = selectedExperiment.measurements[
        selectedExperiment.measurements.length - 1
    ];
    const {
        tempWater,
        tempRoom
    } = execTemperatureFromMeasurements(selectedExperiment.measurements);

    return (
        <Measurement isMobile={isMobile}>
            <Measurement.Title>Показатели</Measurement.Title>

            {
                !isMobile
                &&
                <Measurement.Chart tempWater={tempWater} tempRoom={tempRoom} />
            }

            <Measurement.Row>
                <Measurement.Indicators measurement={measurement} />
                <Measurement.Report experiment={selectedExperiment} />
            </Measurement.Row>
        </Measurement>
    );
};

export default PerformanceIndicators;
