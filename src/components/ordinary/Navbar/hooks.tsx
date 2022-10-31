import { useContext } from 'react';
import NavbarContext from './NavbarContext';

const useNavbarContext = () => useContext(NavbarContext);

export {
    useNavbarContext
}