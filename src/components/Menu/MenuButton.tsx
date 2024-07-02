import {useContext,useEffect, useRef} from 'react'
import {MenuContext} from './Menu'

interface Props {
    className:string;
}

const MenuButton:React.FC<Props> = ({className}:Props) => {
    const {toggleOpen, closeToggle} =  useContext(MenuContext)
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleClick = (event:any) => {
            if(buttonRef.current && !buttonRef.current.contains(event.target)){
                closeToggle();
            }
        }

        document.addEventListener('click', handleClick);

        return ():any => {
            document.removeEventListener('click', handleClick);
        }
    })

    return (
        <button ref={buttonRef} className={className} onClick={toggleOpen}>hamburger</button>
    )
}

export default MenuButton;