import { getClassNameWithModifiers } from '../../../core/utils/className';
import Icon from '../Icon';
import './headline.scss';

enum Levels {
    First,
    Second,
    Third
}

interface HeadlineProps {
    img?: string;
    level: Levels;
    isMobile: boolean
    value: string;
}
const Headline = ({
    img,
    level,
    isMobile,
    value
}: HeadlineProps) => {
    const headlineMap = {
        [Levels.First]: <h1>{value}</h1>,
        [Levels.Second]: <h2>{value}</h2>,
        [Levels.Third]: <h3>{value}</h3>,
    };
    const className = getClassNameWithModifiers({
        className: 'headline',
        modifiers: [
            ['headline--mobile', isMobile],
            ['headline--with-icon', Boolean(img)]
        ]
    });
    const icon = img
        ? <Icon isMobile={isMobile} img={img} alt={value} />
        : null;

    return (
        <div className={className}>
            {icon}
            {headlineMap[level]}
        </div>
    );
};

export { Levels };
export default Headline;
