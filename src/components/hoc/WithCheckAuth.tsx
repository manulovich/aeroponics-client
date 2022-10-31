import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../core/provider/AuthProvider';

interface WitchCheckAuthProps {
    children: any;
}

const WitchCheckAuth = ({ children }: WitchCheckAuthProps) => {
    const { token }  = useAuthContext();

    if (!token) {
        return <Navigate to='/auth' replace />
    }

    return children
};

export default WitchCheckAuth;