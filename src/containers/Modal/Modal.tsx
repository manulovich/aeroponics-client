import { getClassNameWithModifiers } from '../../core/utils/className';
import Body from './subComponents/Body';
import Dialog from './subComponents/Dialog';
import Footer from './subComponents/Footer';
import Header from './subComponents/Header';
import Title from './subComponents/Title';
import './modal.scss';

interface ModalProps {
    isOpen?: boolean;
    isMobile: boolean;
    children: JSX.Element[] | JSX.Element
}
const Modal = ({ children, isMobile, isOpen = false }: ModalProps) => {
    const className = getClassNameWithModifiers({
        className: 'modal',
        modifiers: [
            ['modal--mobile', isMobile],
            ['modal--closed', !isOpen]
        ]
    });

    return (
        <div className={className}>
            {children}
        </div>
    );
};

Modal.Body = Body;
Modal.Dialog = Dialog;
Modal.Footer = Footer;
Modal.Header = Header;
Modal.Title = Title;
Modal.createConfig = (title: string, body: JSX.Element[] | JSX.Element) => {
    return {
        title,
        body
    }
};

export default Modal;