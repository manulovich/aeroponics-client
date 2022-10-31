import Title from './subComponents/Title';
import Body from './subComponents/Body';
import Group from './subComponents/Group';
import Row from './subComponents/Row';
import CardInfoContext from './CardInfoContext';

import './cardInfo.scss';

interface CardInfoProps {
    children: JSX.Element | JSX.Element[];
    isMobile: boolean;
}
const CardInfo = ({ children, isMobile }: CardInfoProps) => {
    return (
        <div className='card-info'>
            <CardInfoContext.Provider value={{ isMobile }}>
                {children}
            </CardInfoContext.Provider>
        </div>
    );
};

CardInfo.Title = Title;
CardInfo.Body = Body;
CardInfo.Group = Group;
CardInfo.Row = Row;

export default CardInfo;