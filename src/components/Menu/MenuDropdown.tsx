
interface Props{
    children:React.ReactNode;
    className?:string;
}

const NewMenuDropdown:React.FC<Props> = ({children,className='',...rest}:Props) => {
    return (
        <div className={className} {...rest}>
            {children}
        </div>
            
    )
}

export default NewMenuDropdown;