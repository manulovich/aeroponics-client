import { useContext, useState } from 'react';
import { togglePinBody } from '../../../core/utils/dom';
import HeaderContext from './HeaderContext';

const useHeaderContext = () => useContext(HeaderContext);

const useMenuControl = (): [boolean, Function] => {
    const [isMenuHidden, setIsMenuHidden] = useState(true);
    
    const onToggleMenuShow = () => {
        togglePinBody()
        setIsMenuHidden(() => !isMenuHidden)
    };

    return [isMenuHidden, onToggleMenuShow];
}

export {
    useHeaderContext,
    useMenuControl
}