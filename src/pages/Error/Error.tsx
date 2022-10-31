import { getClassNameWithModifiers } from '../../core/utils/className';
import './error.scss';

interface ErrorProps {
    children: any;
    isMobile: boolean;
}
const Error = ({ children, isMobile }: ErrorProps) => {
    const className = getClassNameWithModifiers({
        className: 'error',
        modifiers: [
            ['error--mobile', isMobile]
        ]
    });

    return (
        <div className={className}>
            <div className='error__body'>
                <div className='error__images'>
                    <img src={require('./error.jpg')} alt='сообщение об ошибке' />
                </div>
                <div className='error__messages'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Error;