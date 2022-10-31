import Icon from '../../ordinary/Icon';
import './closedButton.scss';

interface ClosedButtonProps {
    isMobile: boolean;
    onClickHandler(): void;
}
const ClosedButton = ({ isMobile, onClickHandler }: ClosedButtonProps) => {
    return (
        <button className='closed-button' onClick={onClickHandler} type='button'>
            <Icon
                isMobile={isMobile}
                alt='закрыть'
                img={require('./close.png')}
            />
        </button>
    );
};

export default ClosedButton;