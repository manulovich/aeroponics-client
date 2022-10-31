import Wrapper from '../../../../containers/Wrapper';

interface BodyProps {
    children: JSX.Element | JSX.Element[]
}
const Body = ({ children }: BodyProps) => {
    return (
        <div className='card-info__body'>
            <Wrapper isBoxSchadow>
                {children}
            </Wrapper>
        </div>
    );
};

export default Body;