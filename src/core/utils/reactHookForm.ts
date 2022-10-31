import { getCorrectString } from './word';

const createRegister = (register: any, name: string, minLength: number) => {
    return register(name, {
        required: 'Поле обязательно к заполнению',
        minLength: {
            value: minLength,
            message: `Минимум ${minLength} ${getCorrectString('символ', minLength)}`
        }
    })
};

export {
    createRegister
}