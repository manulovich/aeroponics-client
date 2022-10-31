import { getClassNameWithModifiers } from '../../../core/utils/className';
import './burger.scss';

interface BurgerProps {
    isOpen: boolean;
    onClickHandler: Function;
}

const Burger = ({ isOpen, onClickHandler }: BurgerProps) => {
    const className = getClassNameWithModifiers({
        className: 'burger',
        modifiers: [
            ['burger--closed', isOpen]
        ]
    })

    return (
        <div className={className} onClick={() => onClickHandler()} />
    )
};

export default Burger