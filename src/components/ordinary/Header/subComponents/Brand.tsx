import Icon from '../../Icon';
import { useHeaderContext } from '../hooks';

const Brand = () => {
    const { isMobile } = useHeaderContext();

    return (
        <>
            <div className='header__brand'>
                <Icon
                    img={require('../logo.png')}
                    isMobile={isMobile}
                    alt='Вятский государственный агротехнологический университет'
                />
            </div>
        </>
    );
};

export default Brand;