import {useState} from 'react'

interface Props{
    initialValue:boolean
}

const useToggle = ({initialValue}:Props):[boolean, ()=>void] => {
    const[isOpen, setToggle] = useState(initialValue)    

    const toggleOpen = ():void => {
        setToggle((prevState) => {
            prevState = !prevState
            return prevState
        })
    }

    return [isOpen, toggleOpen]
}

export default useToggle