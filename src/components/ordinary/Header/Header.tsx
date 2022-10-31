import {
    getClassNameWithModifiers
} from '../../../core/utils/className';
import Container from '../../../containers/Container';
import Wrapper from '../../../containers/Wrapper';
import Toggle from './subComponents/Toggle';
import HeaderContext from './HeaderContext';
import Brand from './subComponents/Brand';
import Collapse from './subComponents/Collapse';
import './header.scss';

interface HeaderProps {
    isMobile: boolean,
    children: JSX.Element | JSX.Element[];
}
const Header = ({
    isMobile,
    children,
}: HeaderProps) => {
    const className = getClassNameWithModifiers({
        className: 'header',
        modifiers: [
            ['header--mobile', isMobile]
        ]
    });

    return (
        <header className={className}>
            <Wrapper isBoxSchadow>
                <Container>
                    <div className='header__row'>
                        <HeaderContext.Provider value={{ isMobile }}>
                            {children}
                        </HeaderContext.Provider>
                    </div>
                </Container>
            </Wrapper>
        </header>
    );
};

Header.Brand = Brand;
Header.Toggle = Toggle;
Header.Collapse = Collapse;

export default Header;
