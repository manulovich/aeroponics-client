import { getClassNameWithModifiers } from '../../../core/utils/className';
import Headline, { Levels } from '../Headline';
import './info.scss';

interface InfoProps {
    img: string;
    title: string;
    description: string;
    isMobile: boolean;
}
const Info = ({img, title, description, isMobile}: InfoProps) => {
    const className = getClassNameWithModifiers({
        className: 'info',
        modifiers: [
            ['info--mobile', isMobile]
        ]
    });

    return (
        <div className={className}>
            <Headline
                img={img}
                level={Levels.Second}
                isMobile={isMobile}
                value={title}
            />

            <p>{description}</p>
        </div>
    );
};

export default Info;
