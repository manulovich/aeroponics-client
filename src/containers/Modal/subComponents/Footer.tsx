interface FooterProps {
    children: JSX.Element[] | JSX.Element
}
const Footer = ({ children }: FooterProps) => {
    return (
        <div className='modal__footer'>
            {children}
        </div>
    );
};

export default Footer;