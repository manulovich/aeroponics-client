import { getClassNameWithModifiers } from '../../../core/utils/className';
import './icon.scss';

interface IconProps {
    img: string;
    isMobile: boolean;
    alt: string;
}
const Icon = ({
    img,
    isMobile,
    alt
}: IconProps) => {
    const className = getClassNameWithModifiers({
        className: 'icon',
        modifiers: [
            ['icon--mobile', isMobile],
        ]
    });
    
    return (
        <span className={className}>
            <img src={img} alt={alt} />
        </span>
    );
};

export default Icon;