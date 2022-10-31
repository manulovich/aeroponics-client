import { useNavigate } from 'react-router-dom';

interface WithRouterUtilsProps {
    Component: any;
    [item: string]: any;
}
const WithRouterUtils = ({ Component, ...restProps }: WithRouterUtilsProps) => {
    const navigate = useNavigate();
    const goHome = () => navigate('/', { replace: true });

    return <Component goHome={goHome} {...restProps} />
};

export default WithRouterUtils;