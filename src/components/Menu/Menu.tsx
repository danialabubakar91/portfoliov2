interface Props {
    children:React.ReactNode;
}

const NewMenu:React.FC<Props> = ({children}:Props) => {
    return(
        <>
        {children}
        </>
    )
}

export default NewMenu;