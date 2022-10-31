import { Device } from '../../../core/interface/User';
import ActiveElement from '../../ui/ActiveElement';
import Details from '../Details';
import { useNavbarContext } from './hooks';

interface DevicesProps {
    deviceList: Device[];
    onSelectDeviceHandler(id: string): void
}
const Devices = ({ deviceList, onSelectDeviceHandler }: DevicesProps) => {
    const { isMobile } = useNavbarContext();

    return (
        <Details isMobile={isMobile}>
            <Details.Summary>устройства</Details.Summary>

            <Details.Body>
                {
                    deviceList.map(device => {
                        return (
                            <Details.Item key={device._id}>
                                <ActiveElement
                                    isMobile={isMobile}
                                    key={device._id}
                                    onClickHandler={
                                        () => onSelectDeviceHandler(device._id)
                                    }
                                >
                                    {device.name}
                                </ActiveElement>
                            </Details.Item>
                        );
                    })
                }
            </Details.Body>
        </Details>
    );
};

export default Devices;