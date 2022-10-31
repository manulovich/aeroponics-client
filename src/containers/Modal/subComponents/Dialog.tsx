import Wrapper from "../../Wrapper";

interface DialogProps {
    children: JSX.Element[] | JSX.Element
}
const Dialog = ({ children }: DialogProps) => {
    return (
        <div className='modal__dialog'>
            <Wrapper isBoxSchadow>
                <div className='modal__dialog-body'>
                    {children}
                </div>
            </Wrapper>
        </div>
    );
};

export default Dialog;