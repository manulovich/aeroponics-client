import { useEffect } from 'react';
import Preloader from '../ordinary/Preloader/Preloader';
import Error from '../../pages/Error';
import { useDataContext } from '../../core/provider/DataProvider';

interface WithDashboardProps {
    Component: any;
    isMobile: boolean;
}

const WithDashboard = ({ Component, isMobile }: WithDashboardProps) => {
    const { user, error, updateUserAllInfo } = useDataContext();

    useEffect(() => {
        updateUserAllInfo();
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateUserAllInfo();
        }, 60_000);

        return () => clearInterval(intervalId);
    }, []);

    if (error) {
        return (
            <Error isMobile={isMobile}>
                {`Ошибка с сервера: ${error}`}
            </Error>
        );
    }

    if (!user) {
        return (
            <Preloader isMobile={isMobile}>
                Данные загружаются. Пожалйста подождите
            </Preloader>
        );
    }

    return (
        <Component user={user} isMobile={isMobile} />
    )
}

export default WithDashboard;