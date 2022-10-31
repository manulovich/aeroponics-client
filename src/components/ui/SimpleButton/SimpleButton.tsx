import { getClassNameWithModifiers } from '../../../core/utils/className';
import './simpleButton.scss';

interface SimpleButtonProps {
    isMobile: boolean;
    isDisabled?: boolean;
    isFill: boolean;
    value: string;
    text: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: Function;
}
const SimpleButton = ({
    isMobile,
    isDisabled,
    isFill,
    value,
    text,
    type,
    onClick
}: SimpleButtonProps) => {
    const className = getClassNameWithModifiers({
        className: 'simple-button',
        modifiers: [
            ['simple-button--mobile', isMobile],
            ['simple-button--fill', isFill],
        ]
    });

    return (
        <button
            className={className}
            disabled={isDisabled}
            onClick={(event) => onClick && onClick(event)}
            value={value}
            type={type}
        >
            {text}
        </button>
    );
};

export default SimpleButton;
