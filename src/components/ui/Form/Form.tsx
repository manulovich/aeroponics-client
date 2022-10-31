import './form.scss';

interface FormProps {
    children: JSX.Element[] | JSX.Element | string | number;
    [item: string]: any;
}
const Form = ({ children, ...props }: FormProps) => {

    return (
        <form {...props} className='form'>
            {children}
        </form>
    );
};
export default Form;