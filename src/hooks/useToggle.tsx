
import {useState} from 'react'

interface Props {
    initialOn:boolean;
}

const useToggle = ({initialOn}:Props):[boolean,()=>void]  => {
    const [on, setOn] = useState(initialOn)

    const toggleOn = () => {
        setOn((prevOn)=>{
            return !prevOn
        })
    }

    return [on, toggleOn]
}

export default useToggle;
