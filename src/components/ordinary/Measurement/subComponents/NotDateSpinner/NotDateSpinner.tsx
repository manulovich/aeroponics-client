import { getClassNameWithModifiers } from '../../../../../core/utils/className';
import { useMeasurementContext } from '../../hooks';
import './notDateSpinner.scss';

const NotDateSpinner = () => {
    const { isMobile } = useMeasurementContext();
    const classNames = getClassNameWithModifiers({
        className: 'now-data-spinner',
        modifiers: [
            ['now-data-spinner--mobile', isMobile]
        ]
    })

    return (
        <div className={classNames}>

        </div>
    );
};

export default NotDateSpinner;