import { forwardRef, Ref } from 'react';
import { getClassNameWithModifiers } from '../../../core/utils/className';
import './textarea.scss';

interface TextareaProps {
    isMobile: boolean;
    label: string;
    errorMessage?: string;
    children: string;
}
const Textarea = forwardRef((props: TextareaProps, ref: Ref<HTMLTextAreaElement>) => {
    const { isMobile, label, errorMessage, children, ...otherProps } = props;

    const className = getClassNameWithModifiers({
        className: 'textarea-field',
        modifiers: [
            ['textarea-field--mobile', isMobile]
        ]
    })

    return (
        <label className={className}>
            <div className='textarea-field__header'>
                <div className='textarea-field__label'>
                    {label}
                </div>
                {
                    errorMessage
                    &&
                    <div className='textarea-field__error-message'>
                        {errorMessage}
                    </div>
                }
            </div>
            <textarea
                ref={ref}
                className='textarea-field__textarea'
                defaultValue={children}
                {...otherProps}
            />
        </label>
    )
});

export default Textarea;