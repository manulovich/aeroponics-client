interface BodyProps {
    children: any
}
const Body = ({ children }: BodyProps) => {
    return (
        <div className='modal__body'>
            {children}
        </div>
    );
};

export default Body;