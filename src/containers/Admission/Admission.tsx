import { getClassNameWithModifiers } from '../../core/utils/className';
import Headline, { Levels } from '../../components/ordinary/Headline';
import Footer from './subComponents/Footer';
import './admission.scss';

interface AdmissionProps {
    isMobile: boolean;
    title: string;
    children: JSX.Element[] | JSX.Element;
    error?: string;
    img?: string;
}
const Admission = ({ isMobile, title, children, error, img }: AdmissionProps) => {
    const className = getClassNameWithModifiers({
        className: 'admission-page',
        modifiers: [
            ['admission-page--mobile', isMobile]
        ]
    })

    return (
        <div className={className}>
            <div className='admission-page__body'>
                <Headline
                    img={img}
                    level={Levels.Second}
                    isMobile={isMobile}
                    value={title}
                />

                {
                    error
                    &&
                    <div className='admission-page__response-server'>
                        {error}
                    </div>
                }

                <div className='admission-page__form'>
                    {children}
                </div>
            </div>
        </div>
    );
};

Admission.Footer = Footer;

export default Admission;