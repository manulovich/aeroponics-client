import { createContext, useContext, useState } from 'react';
import ResponseError from '../elementaryEntities/ResponseError';
import { User } from '../interface/User';
import UserService from '../serverServices/User';

interface IDataContext {
    user: User | undefined;
    error: ResponseError | undefined;
    updateUserAllInfo(): void;
}
const DataContext = createContext<IDataContext>({
    user: undefined,
    error: undefined,
    async updateUserAllInfo() {}
});

const useDataContext = () => useContext(DataContext);

interface DataProviderProps {
    children: any;
}
const DataProvider = ({ children }: DataProviderProps) => {
    const [user, setUser] = useState<User>();
    const [error, setError] = useState<ResponseError>()
    const userService = new UserService();

    const updateUserAllInfo = async () => {
        const serverResponse = await userService.getFullData();

        if (serverResponse instanceof ResponseError) {
            setError(serverResponse);
            setUser(undefined);
            return;
        }

        setError(undefined);
        setUser(serverResponse.user);
    };

    const value = {
        user,
        error,
        updateUserAllInfo
    };

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
}

export default DataProvider;
export {
    DataContext,
    useDataContext
}