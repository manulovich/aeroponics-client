import { forwardRef, Ref } from 'react';
import './input.scss';

interface InputProps {
    children: string;
    label: string;
    isMobile: boolean;
    errorMessage?: string;
    [item: string]: any;
}
const Input = forwardRef((props: InputProps, ref: Ref<HTMLInputElement>) => {
    const { isMobile, label, errorMessage, children, ...otherProps } = props;

    const className = isMobile
        ? 'input-field input-field--mobile'
        : 'input-field';

    return (
        <label className={className}>
            <div className='input-field__header'>
                <div className='input-field__label'>
                    {label}
                </div>

                {
                    errorMessage
                    &&
                    <div className='input-field__error-message'>
                        {errorMessage}
                    </div>
                }
            </div>
            <input
                ref={ref}
                className='input-field__input'
                placeholder={children}
                {...otherProps}
            />
        </label>
    )
});

export default Input;