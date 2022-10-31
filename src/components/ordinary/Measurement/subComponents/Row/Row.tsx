import { getClassNameWithModifiers } from '../../../../../core/utils/className';
import { useMeasurementContext } from '../../hooks';
import './row.scss';

interface RowProps {
    children: JSX.Element | JSX.Element[];
}
const Row = ({ children }: RowProps) => {
    const { isMobile } = useMeasurementContext();
    const classNames = getClassNameWithModifiers({
        className: 'row',
        modifiers: [
            ['row--mobile', isMobile]
        ]
    })

    return (
        <div className={classNames}>
            {children}
        </div>
    );
};

export default Row;