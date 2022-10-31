import { getClassNameWithModifiers } from '../../../core/utils/className';
import Summary from './Summary';
import Body from './Body';
import Item from './Item';
import Group from './Group';
import './details.scss';

interface DetailsProps {
    children: JSX.Element[];
    isMobile: boolean;
}
const Details = ({ children, isMobile }: DetailsProps) => {
    const className = getClassNameWithModifiers({
        className: 'details',
        modifiers: [
            ['details--mobile', isMobile]
        ]
    });

    return (
        <details className={className}>
            {children}
        </details>
    );
};

Details.Summary = Summary;
Details.Body = Body;
Details.Item = Item;
Details.Group = Group;

export type { DetailsProps };
export default Details;
