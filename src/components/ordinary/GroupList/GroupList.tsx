import './groupList.scss';

interface GroupListProps {
    list: JSX.Element[][];
}
const GroupList = ({ list }: GroupListProps) => {
    const grouList = list.map((group, groupIndex) => {
        return (
            <ul className='group-list__group' key={`group-${groupIndex}`}>
                {
                    group.map((item, itemIndex) => {
                        return (
                            <li key={`group-item-${groupIndex}-${itemIndex}`}>
                                {item}
                            </li>
                        );
                    })
                }
            </ul>
        );
    });

    return (
        <div className='group-list'>
            {grouList}
        </div>
    );
};

export default GroupList;
