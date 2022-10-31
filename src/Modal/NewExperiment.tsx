import Input from '../components/smart/Input';
import Textarea from '../components/smart/Textarea';
import { createRegister } from '../core/utils/reactHookForm';
import DeviceService from '../core/serverServices/Device';
import WithModal from './WithModal';

interface NewExperimentProps {
    selectDeviceId: string;
    isMobile: boolean;
    isModalOpen: boolean;
    closeModal(): void;
}
const NewExperiment = ({
    selectDeviceId,
    isMobile,
    isModalOpen,
    closeModal
}: NewExperimentProps) => {
    const renderNewExperimentBody = (register: any, errors: any) => {
        const descriptionRegister = createRegister(register, 'description', 6);
        const titleRegister = createRegister(register, 'title', 3);

        return (
            <>
                <Input
                    label='Название:'
                    type='text'
                    isMobile={isMobile}
                    errorMessage={errors?.title?.message}
                    {...titleRegister}
                >
                    Супер эксперимент
                </Input>

                <Textarea
                    label='Описание'
                    isMobile={isMobile}
                    errorMessage={errors?.description?.message}
                    {...descriptionRegister}
                >
                    Полезное описание супер эксперимента
                </Textarea>
            </>
        );
    };

    const onSubmitHandler = async (data: any) => {
        const deviceService = new DeviceService();

        return await deviceService.stopCurrentExperiment(
            selectDeviceId,
            data?.title,
            data?.description
        );
    };

    return (
        <WithModal
            title='Новый эксперимент'
            isMobile={isMobile}
            isModalOpen={isModalOpen}
            closeModal={closeModal}
            onSubmitHandler={onSubmitHandler}
        >
            {renderNewExperimentBody}
        </WithModal>
    );
};

export default NewExperiment;