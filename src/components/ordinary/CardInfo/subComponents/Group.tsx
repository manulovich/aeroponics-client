interface GroupProps {
    children: JSX.Element | JSX.Element[]
}
const Group = ({ children }: GroupProps) => {
    return (
        <div className='card-info__group'>
            {children}
        </div>
    );
};

export default Group;