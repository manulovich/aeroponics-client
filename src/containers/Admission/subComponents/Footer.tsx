interface FooterProps {
    children: any;
}
const Footer = ({ children }: FooterProps) => {

    return (
        <div className='admission-page__footer'>
            {children}
        </div>
    );
};

export default Footer