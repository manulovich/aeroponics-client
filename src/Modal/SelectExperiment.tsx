import Input from '../components/smart/Input';
import Textarea from '../components/smart/Textarea';
import { createRegister } from '../core/utils/reactHookForm';
import ExperimentService from '../core/serverServices/Experiment';
import WithModal from './WithModal';
import { Experimet } from '../core/interface/User';
import ResponseError from '../core/elementaryEntities/ResponseError';

interface SelectExperimentProps {
    isMobile: boolean;
    isModalOpen: boolean;
    currentExperimen: Experimet;
    closeModal(): void;
}
const SelectExperiment = ({
    isMobile,
    isModalOpen,
    currentExperimen,
    closeModal
}: SelectExperimentProps) => {
    const renderCurrentExperimentBody = (register: any, errors: any) => {
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
                    {currentExperimen.title}
                </Input>

                <Textarea
                    label='Описание'
                    isMobile={isMobile}
                    errorMessage={errors?.description?.message}
                    {...descriptionRegister}
                >
                    {currentExperimen.description}
                </Textarea>
            </>
        )
    };

    const onSubmitHandler = async (data: any) => {
        const experimentService = new ExperimentService();
        let messageError = '';

        const responseEdditDescription = await experimentService
            .edditDescription(currentExperimen._id, data?.description);
        const responseEdditTitle = await experimentService
            .edditTitle(currentExperimen._id, data?.title)

        if (
            responseEdditDescription instanceof ResponseError
        ) {
            messageError += `${responseEdditDescription.error} `;
        }
        if (
            responseEdditTitle instanceof ResponseError
        ) {
            messageError += `${responseEdditTitle.error} `;
        }

        if (messageError.length === 0) {
            return new Promise(resolve => resolve(new ResponseError(messageError)));
        }

        return new Promise(resolve => resolve({ status: true }));
    };

    return (
        <WithModal
            title='Выбранный эксперимент'
            isMobile={isMobile}
            isModalOpen={isModalOpen}
            closeModal={closeModal}
            onSubmitHandler={onSubmitHandler}
        >
            {renderCurrentExperimentBody}
        </WithModal>
    )
};

export default SelectExperiment;