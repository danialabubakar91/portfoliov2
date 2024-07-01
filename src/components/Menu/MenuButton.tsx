import {useContext} from 'react'
import {MenuContext} from './Menu'

interface Props {
    className:string;
}

const MenuButton:React.FC<Props> = ({className}:Props) => {
    const {toggleOpen} =  useContext(MenuContext)
    return (
        <button className={className} onClick={toggleOpen}>hamburger</button>
    )
}

export default MenuButton;