import { useContext } from 'react';
import CardInfoContext from './CardInfoContext';

const useCardInfoContext = () => useContext(CardInfoContext);

export {
    useCardInfoContext
}