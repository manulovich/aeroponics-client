import { getClassNameWithModifiers } from '../../../../../core/utils/className';
import Headline, { Levels } from '../../../Headline';
import { useMainContext } from '../../hooks';
import './greetings.scss';

const Greetings = () => {
    const { isMobile, user } = useMainContext();
    const className = getClassNameWithModifiers({
        className: 'greetings',
        modifiers: [
            ['greetings--mobile', isMobile]
        ]
    });

    if (!user || user?.deviceList.length !== 0) return null;

    return (
        <div className={className}>
            <Headline
                img={require('./greeting.png')}
                level={Levels.First}
                isMobile={isMobile}
                value={`Приветсвую, ${user.username}!`}
            />

            <p>
                Для того, чтобы продолжить,
                добавьте устройство при помощи пункта в блоке "настройки",
                расположенных сверху
            </p>
        </div>
    )
};

export default Greetings;