import { getClassNameWithModifiers } from '../../../core/utils/className';
import './activeElement.scss';

interface ActiveElementProps {
    onClickHandler(): void;
    children: JSX.Element | JSX.Element[] | string;
    isMobile: boolean;
}
const ActiveElement = ({ onClickHandler, children, isMobile }: ActiveElementProps) => {
    const className = getClassNameWithModifiers({
        className: 'active-element',
        modifiers: [
            ['active-element--mobile', isMobile]
        ]
    })

    return (
        <button className={className} onClick={onClickHandler}>
            {children}
        </button>
    );
};

export default ActiveElement;