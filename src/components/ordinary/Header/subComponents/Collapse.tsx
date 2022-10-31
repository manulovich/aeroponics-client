import { getClassNameWithModifiers } from '../../../../core/utils/className';
import { useHeaderContext } from '../hooks';

interface CollapseProps {
    children: JSX.Element | JSX.Element[];
    isHidden?: boolean;
}
const Collapse = ({ children, isHidden = false }: CollapseProps) => {
    const { isMobile } = useHeaderContext();
    const classNames = getClassNameWithModifiers({
        className: 'header__collapse',
        modifiers: [
            ['header__collapse--mobile', isMobile],
            ['header__collapse--hidden', isHidden],
        ]
    })

    return (
        <div className={classNames}>
            {children}
        </div>
    );
};

export default Collapse;