import ClassResponseError from '../../../core/elementaryEntities/ResponseError';
import './responseError.scss';

interface ResponseErrorProps {
    error?: ClassResponseError
}
const ResponseError = ({ error }: ResponseErrorProps) => {
    if (!error) return null;

    return (
        <p className='response-error'>{error.error}</p>
    )
};

export default ResponseError;