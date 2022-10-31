import { getClassNameWithModifiers } from '../../../core/utils/className';
import './preloader.scss';

interface PreloaderProps {
    isMobile: boolean;
    children?: string
}
const Preloader = ({ isMobile, children = '' }: PreloaderProps) => {
    const className = getClassNameWithModifiers({
        className: 'preloader',
        modifiers: [
            ['preloader--mobile', isMobile]
        ]
    });

    return (
        <div className={className}>
            <div className='preloader__body'>
                <div className='preloader__images'>
                    <img src={require('./plant.png')} alt='preloader' />
                </div>
                <div className='prelaoder__text'>
                    {children}
                </div>
            </div>
        </div>
    )
};

export default Preloader;