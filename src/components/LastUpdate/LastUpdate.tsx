import { getTimeElapsedSince } from '../../utils/date';
import './lastUpdate.scss';

interface LastUpdateProps {
    dateLastUpdate: Date | string;
}
const LastUpdate = ({ dateLastUpdate }: LastUpdateProps) => {
    const lastUpdate = getTimeElapsedSince(dateLastUpdate);
    
    return (
        <p className='last-update'>
            {`последнее обновление ${lastUpdate} минут назад`}
        </p>
    );
};

export default LastUpdate;
