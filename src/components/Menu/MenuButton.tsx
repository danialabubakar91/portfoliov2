
import Button from '../Button/Button'

interface Props {
    children:React.ReactNode;
    toggleOn?: ()=>void;
}

const NewMenuButton:React.FC<Props> = ({children,toggleOn}:Props) => {
    return(
        <Button onClick={toggleOn}>
            {children}
        </Button>
    )
}

export default NewMenuButton;