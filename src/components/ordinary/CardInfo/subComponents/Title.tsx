import Headline, { Levels } from '../../Headline';
import Wrapper from '../../../../containers/Wrapper';
import { useCardInfoContext } from '../hooks';

interface TitlepProps {
    children: string;
}
const Title = ({ children }: TitlepProps) => {
    const { isMobile } = useCardInfoContext();

    return (
        <div className='card-info__title'>
            <Wrapper isBoxSchadow>
                <div className='card-info__title-body'>
                    <Headline
                        level={Levels.Third}
                        isMobile={isMobile}
                        value={children}
                    />
                </div>
            </Wrapper>
        </div>
    );
};

export default Title;