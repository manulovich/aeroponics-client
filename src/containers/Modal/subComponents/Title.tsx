interface TitleProps {
    children: JSX.Element[] | JSX.Element;
}
const Title = ({ children }: TitleProps) => {
    return (
        <div className='modal__title'>
            {children}
        </div>
    );
};

export default Title;