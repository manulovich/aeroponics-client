import Container from '../../../containers/Container';
import Description from './subComponents/Description';
import PerformanceIndicators from './subComponents/PerformanceIndicators';
import Greetings from './subComponents/Greetings';
import MainContext from './MainContext';
import './main.scss';
import { Device, Experimet, User } from '../../../core/interface/User';

interface MainProps {
    children: JSX.Element[] | JSX.Element;
    isMobile: boolean;
    user: User
    selectedExperiment: Experimet | undefined
    selectedDevice: Device | undefined
}
const Main = ({
    children,
    isMobile,
    user,
    selectedDevice,
    selectedExperiment
}: MainProps) => {
    const valueMainContextProvainer = {
        isMobile,
        user,
        selectedDevice,
        selectedExperiment
    }

    return (
        <main className='main'>
            <Container>
                <div className='main__row'>
                    <MainContext.Provider value={valueMainContextProvainer}>
                        {children}
                    </MainContext.Provider>
                </div>
            </Container>
        </main>
    )
};

Main.Description = Description;
Main.PerformanceIndicators = PerformanceIndicators;
Main.Greetings = Greetings;

export default Main;