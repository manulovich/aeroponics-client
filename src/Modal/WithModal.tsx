import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ClosedButton from '../components/ui/ClosedButton';
import Form from '../components/ui/Form';
import Headline, { Levels } from '../components/ordinary/Headline';
import Modal from '../containers/Modal';
import ResponseError from '../components/ordinary/ResponseError';
import SimpleButton from '../components/ui/SimpleButton';
import { useDataContext } from '../core/provider/DataProvider';

interface WithModalProps {
    title: string;
    isMobile: boolean;
    isModalOpen: boolean;
    closeModal(): void;
    onSubmitHandler(data: any): Promise<any>
    children(register: any, errors: any): JSX.Element
}
const WithModal = ({
    title,
    isMobile,
    isModalOpen,
    closeModal,
    onSubmitHandler,
    children
}: WithModalProps) => {
    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit
    } = useForm({
        mode: 'onBlur'
    });
    const [errorFromServer, setErrorFromServer] = useState();
    const [isOpen, setIsOpen] = useState(isModalOpen);
    const { updateUserAllInfo } = useDataContext();

    const wrapperOnSubmitHandler = async (data: any) => {
        const response = await onSubmitHandler(data);

        if (response?.error) {
            setErrorFromServer(response);
        } else {
            console.log('reload');
            updateUserAllInfo();
            setErrorFromServer(undefined);
            setIsOpen(false)
        }
    };

    useEffect(() => {
        setIsOpen(isModalOpen);
    }, [isModalOpen]);

    return (
        <Modal isMobile={isMobile} isOpen={isOpen}>
            <Modal.Dialog>
                <Form onSubmit={handleSubmit(wrapperOnSubmitHandler)}>
                    <Modal.Header>
                        <Modal.Title>
                            <Headline
                                level={Levels.Second}
                                isMobile={isMobile}
                                value={title}
                            />
                        </Modal.Title>
                        <ClosedButton
                            isMobile={isMobile}
                            onClickHandler={closeModal}
                        />
                    </Modal.Header>

                    <Modal.Body>
                        <ResponseError
                            error={errorFromServer}
                        />
                        {children(register, errors)}
                    </Modal.Body>

                    <Modal.Footer>
                        <SimpleButton
                            isMobile={isMobile}
                            isDisabled={!isValid}
                            isFill={isMobile}
                            text='сохранить'
                            value='сохранить'
                            type='submit'
                        />
                        <SimpleButton
                            isMobile={isMobile}
                            isFill={isMobile}
                            text='отмена'
                            type='reset'
                            value='отмена'
                            onClick={closeModal}
                        />
                    </Modal.Footer>
                </Form>
            </Modal.Dialog>
        </Modal >
    );
};

export default WithModal;