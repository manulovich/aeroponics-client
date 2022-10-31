interface ItemProps {
    children: string | JSX.Element
}
const Item = ({ children }: ItemProps) => {

    return (
        <li className='details__item'>
            {children}
        </li>
    );
};

export default Item;