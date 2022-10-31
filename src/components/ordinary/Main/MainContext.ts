import { createContext } from 'react';
import { Device, Experimet, User } from '../../../core/interface/User';

interface Context {
    isMobile: boolean,
    user: User | null,
    selectedExperiment: Experimet | undefined,
    selectedDevice: Device | undefined
};
const MainContext = createContext<Context>({
    isMobile: false,
    user: null,
    selectedExperiment: undefined,
    selectedDevice: undefined
});

export default MainContext;