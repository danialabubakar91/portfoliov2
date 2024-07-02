import {useState} from 'react'

interface Props{
    initialValue:boolean
}

const useToggle = ({initialValue}:Props):[boolean, ()=>void, ()=>void] => {
    const[isOpen, setToggle] = useState(initialValue)    

    const toggleOpen = ():void => {
        setToggle((prevState) => {
            prevState = !prevState
            return prevState
        })
    }

    const closeToggle = ():void => {
        setToggle((prevState)=>{
            prevState = false;
            return prevState;
        })
    }

    return [isOpen, toggleOpen, closeToggle]
}

export default useToggle