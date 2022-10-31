import Headline, { Levels } from '../../../Headline';
import { useMeasurementContext } from '../../hooks';
import './title.scss';

interface TitleProps {
    children: string;
}
const Title = ({ children }: TitleProps) => {
    const { isMobile } = useMeasurementContext();

    return (
        <Headline
            img={require('./work.png')}
            level={Levels.Second}
            isMobile={isMobile}
            value={children}
        />
    );
};

export default Title;