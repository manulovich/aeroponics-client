interface SummaryProps {
    children: string | JSX.Element
}
const Summary = ({ children }: SummaryProps) => {

    return (
        <summary className='details__summary'>
            {children}
        </summary>
    );
};

export default Summary;