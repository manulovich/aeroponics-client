import { useState } from 'react';
import { Device, Experimet, User } from '../../core/interface/User';
import Header from '../../components/ordinary/Header';
import Main from '../../components/ordinary/Main';
import Navbar from '../../components/ordinary/Navbar';
import { pinBody, unPinBody } from '../../core/utils/dom';
import { useUserData } from './hooks';
import { useMenuControl } from '../../components/ordinary/Header/hooks';
import { useAuthContext } from '../../core/provider/AuthProvider';
import './dashboard.scss';
import NewDevice from '../../Modal/NewDevice';
import NewExperiment from '../../Modal/NewExperiment';
import SelectDevice from '../../Modal/SelectDevice';
import SelectExperiment from '../../Modal/SelectExperiment';

interface DashboardProps {
    isMobile: boolean;
    user: User;
}
const Dashboard = ({ isMobile, user }: DashboardProps) => {
    const { signout } =  useAuthContext();
    const {
        experimentList,
        setExperiment,
        selectExperiment,
        deviceList,
        setDevice,
        selectDevice
    } = useUserData(user);

    const onSelectDeviceHandler = (id: string) => {
        setDevice(deviceList.find(
            (device: Device) => device._id === id)
        );
    };

    const onSelectExperimentHandler = (id: string) => {
        setExperiment(experimentList.find(
            (experiment: Experimet) => experiment._id === id)
        );
    };

    const [isMenuHidden, onToggleMenuShow] = useMenuControl();

    const [idShowModal, setIdShowModal] = useState<string>('newDevice');
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openModal = () => {
        pinBody();
        setIsModalOpen(true);
    };
    const closeModal = () => {
        unPinBody();
        setIsModalOpen(false);
    };

    const showModal = (id: string) => {
        setIdShowModal(id);
        openModal();
    };

    const getIsOpenConcreteModal = (id: string) => {
        return isModalOpen && idShowModal === id;
    };

    return (
        <div className='dashboard'>
            <div className='dashboard__header'>
                <Header
                    isMobile={isMobile}
                >
                    <Header.Brand />

                    <Header.Toggle callback={onToggleMenuShow} />

                    <Header.Collapse isHidden={isMenuHidden && isMobile}>
                        <Navbar isMobile={isMobile}>
                            <Navbar.Settings
                                isSelectDevice={!!selectDevice}
                                isSelectExperiment={!!selectExperiment}
                                toggleShowModal={showModal}
                                signout={signout}
                            />
                            <Navbar.Devices
                                deviceList={deviceList}
                                onSelectDeviceHandler={onSelectDeviceHandler}
                            />
                            <Navbar.Experimets
                                experimentList={experimentList}
                                onSelectExperimentHandler={onSelectExperimentHandler}
                            />
                        </Navbar>
                    </Header.Collapse>
                </Header>
            </div>

            <div className='dashboard__main'>
                <Main
                    isMobile={isMobile}
                    user={user}
                    selectedExperiment={selectExperiment}
                    selectedDevice={selectDevice}
                >
                    <Main.Greetings />
                    <Main.Description />
                    <Main.PerformanceIndicators />
                </Main>

                <NewDevice
                    isMobile={isMobile}
                    isModalOpen={getIsOpenConcreteModal('newDevice')}
                    closeModal={closeModal}
                />

                {
                    selectDevice
                    &&
                    <NewExperiment
                        selectDeviceId={selectDevice?._id}
                        isMobile={isMobile}
                        isModalOpen={getIsOpenConcreteModal('newExperiment')}
                        closeModal={closeModal}
                    />
                }

                {
                    selectDevice
                    &&
                    <SelectDevice
                        isMobile={isMobile}
                        isModalOpen={getIsOpenConcreteModal('currentDevice')}
                        selectDevice={selectDevice}
                        closeModal={closeModal}
                    />
                }

                {
                    selectExperiment
                    &&
                    <SelectExperiment
                        isMobile={isMobile}
                        isModalOpen={getIsOpenConcreteModal('currentExperiment')}
                        currentExperimen={selectExperiment}
                        closeModal={closeModal}
                    />
                }
            </div>
        </div>
    );
};

export default Dashboard;

