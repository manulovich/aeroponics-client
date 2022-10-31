import Info from '../../../Info';
import LastUpdate from '../../../LastUpdate';
import { useMainContext } from '../../hooks';
import './description.scss';

const Description = () => {
    const {
        isMobile,
        selectedExperiment,
        selectedDevice
    } = useMainContext();

    if (!selectedExperiment || !selectedDevice) return null;

    return (
        <section className='description'>
            <div className='description__last-update'>
                <LastUpdate
                    dateLastUpdate={selectedExperiment.lastUpdate}
                />
            </div>

            <div className='description__selected-device'>
                <Info
                    img={require('./device.png')}
                    title={selectedDevice.name}
                    description={selectedDevice.description}
                    isMobile={isMobile}
                />
            </div>

            <div className='description__selected-experiment'>
                <Info
                    img={require('./experiment.png')}
                    title={selectedExperiment.title}
                    description={selectedExperiment.description}
                    isMobile={isMobile}
                />
            </div>
        </section>
    );
};

export default Description;