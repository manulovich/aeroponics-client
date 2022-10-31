import { useState } from 'react';
import { getClassNameWithModifiers } from '../../../../core/utils/className';
import { useHeaderContext } from '../hooks';

interface ToggleProps {
    callback?: Function;
}
const Toggle = ({ callback = () => {}}: ToggleProps) => {
    const { isMobile } = useHeaderContext();
    const [isActive, setIsActive] = useState(false);
    const classNames = getClassNameWithModifiers({
        className: 'header__toggle',
        modifiers: [
            ['header__toggle--mobile', isMobile],
            ['header__toggle--active', isActive]
        ]
    });

    const onToggleHandler = () => {
        callback();
        setIsActive(() => !isActive);
    };

    return (
        <div className={classNames} onClick={onToggleHandler} />
    );
};

export default Toggle;