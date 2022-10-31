import Wrapper from '../../../containers/Wrapper';

interface BodyProps {
    children: any;
}
const Body = ({ children }: BodyProps) => {

    return (
        <div className='details__body'>
            <Wrapper isBoxSchadow>
                <ul className='details__list'>
                    {children}
                </ul>
            </Wrapper>
        </div>
    );
};

export default Body;