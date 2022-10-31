import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Admission from '../../containers/Admission';
import Form from '../../components/ui/Form';
import Input from '../../components/smart/Input';
import SimpleButton from '../../components/ui/SimpleButton';
import ResponseError from '../../core/elementaryEntities/ResponseError';
import { useAuthContext } from '../../core/provider/AuthProvider';

interface ResetProps {
    isMobile: boolean;
    goHome: Function;
}
const Reset = ({ isMobile, goHome }: ResetProps) => {
    const [error, setError] = useState<string>('');
    const authContext = useAuthContext();
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

    const onSubmitHandler = (data: any) => {
        authContext.recovery(data.email, (error: ResponseError) => {
            if (error) {
                setError(error.error)
            } else {
                setError('')
                alert('На вашу почту отправлен новый пароль')
                goHome();
            }
        });
    };

    return (
        <Admission
            isMobile={isMobile}
            error={error}
            title='Восстановление пароля'
            img={require('./recovery.png')}
        >
            <Form
                onSubmit={handleSubmit(onSubmitHandler)}
                className='admission-page__form'
            >
                <hr style={{margin: '15px 0'}} />

                <Input
                    label='Почта:'
                    type='email'
                    errorMessage={errors?.email?.message}
                    isMobile={isMobile}
                    {...register('email', {
                        required: 'Поле обязательно к заполнению',
                        minLength: {
                            value: 3,
                            message: 'минимум 3 символа'
                        }
                    })}
                >
                    email@email.com
                </Input>

                <Admission.Footer>
                    <SimpleButton
                        isDisabled={!isValid}
                        isMobile={isMobile}
                        isFill={isMobile}
                        type='submit'
                        value='Получить новый пароль'
                        text='Получить новый пароль'
                    />

                    <Link to='/registration'>Регистрация</Link>
                </Admission.Footer>
            </Form>
        </Admission>
    );
};

export default Reset;