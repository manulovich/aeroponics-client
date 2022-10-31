interface HeaderProps {
    children: [JSX.Element, JSX.Element]
}
const Header = ({ children }: HeaderProps) => {
    return (
        <div className='modal__header'>
            {children}
        </div>
    );
};

export default Header;