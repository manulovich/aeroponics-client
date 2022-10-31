interface RowProps {
    children: JSX.Element | JSX.Element[]
}
const Row = ({ children }: RowProps) => {
    return (
        <div className='card-info__row'>{children}</div>
    );
};

export default Row;