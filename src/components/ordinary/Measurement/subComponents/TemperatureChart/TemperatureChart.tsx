import { useState } from 'react';
import Headline, { Levels } from '../../../Headline';
import SimpleButton from '../../../../ui/SimpleButton';
import Wrapper from '../../../../../containers/Wrapper';
import './temperatureChart.scss';
import TemperatureGraph from '../TemperatureGraph';

interface Temperture {
    value: number;
    date: string;
}
interface TemperatureChartProps {
    tempWater: Temperture[];
    tempRoom: Temperture[];
}
const TemperatureChart = ({ tempRoom, tempWater }: TemperatureChartProps) => {
    const [show, setShow] = useState('Вода');
    let showTemperatures = show === 'Вода' ? tempWater : tempRoom

    const onSimpleButtonHandler = (event: any) => {
        setShow(event.currentTarget.value);
    }

    return (
        <div className='temperature-chart'>
            <div className='temperature-chart__header'>
                <Wrapper isBoxSchadow>
                    <div className='temperature-chart__title'>
                        <Headline
                            level={Levels.Third}
                            isMobile={false}
                            value='температура'
                        />
                    </div>
                </Wrapper>

                <div className='temperature-chart__group'>
                    <SimpleButton
                        isFill={false}
                        isMobile={false}
                        isDisabled={false}
                        value='Вода'
                        text='вода'
                        onClick={onSimpleButtonHandler}
                    />
                    <SimpleButton
                        isFill={false}
                        isMobile={false}
                        isDisabled={false}
                        value='Комната'
                        text='комната'
                        onClick={onSimpleButtonHandler}
                    />
                </div>
            </div>

            <div className='temperature-chart__chart'>
                <TemperatureGraph label={show} temperatures={showTemperatures} />
            </div>
        </div>
    );
};

export default TemperatureChart;
