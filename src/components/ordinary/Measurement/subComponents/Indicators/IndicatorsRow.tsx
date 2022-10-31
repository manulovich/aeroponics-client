interface IndicatorsRowProps {
    label: string;
    value: string;
}
const IndicatorsRow = ({ label, value }: IndicatorsRowProps) => {
    return (
        <div className='indicators__row'>
            <span className='indicators__label'>{label}</span>
            <span className='indicators__value'>{value}</span>
        </div>
    );
};

export default IndicatorsRow