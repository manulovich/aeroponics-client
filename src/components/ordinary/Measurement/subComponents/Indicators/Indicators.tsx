import { Measurement } from '../../../../../core/interface/User';
import { useMeasurementContext } from '../../hooks';
import IndicatorsRow from './IndicatorsRow';
import CardInfo from '../../../CardInfo';
import './indicators.scss'

interface IndicatorsProps {
    measurement: Measurement;

}
const Indicators = ({ measurement }: IndicatorsProps) => {
    const { isMobile } = useMeasurementContext();

    const { tempWater, tempRoom } = measurement;
    const error = measurement.danger ? 'Да' : 'Нет';

    return (
        <div className='indicators'>
            <CardInfo isMobile={isMobile}>
                <CardInfo.Title>Последние измерения</CardInfo.Title>

                <CardInfo.Body>
                    <CardInfo.Group>
                        <CardInfo.Row>
                            <IndicatorsRow label='Температура помещения' value={`${tempRoom}`} />
                        </CardInfo.Row>
                        <CardInfo.Row>
                            <IndicatorsRow label='Температура воды' value={`${tempWater}`} />
                        </CardInfo.Row>
                    </CardInfo.Group>
                    <CardInfo.Group>
                        <CardInfo.Row>
                            <IndicatorsRow label='Время включения света' value={measurement.lightWorkingTime} />
                        </CardInfo.Row>
                        <CardInfo.Row>
                            <IndicatorsRow label='Время отключения света' value={measurement.lightOffTime} />
                        </CardInfo.Row>
                    </CardInfo.Group>
                    <CardInfo.Group>
                        <CardInfo.Row>
                            <IndicatorsRow label='Ошибки' value={error} />
                        </CardInfo.Row>
                    </CardInfo.Group>
                </CardInfo.Body>
            </CardInfo>
        </div>
    );
};

export default Indicators;
