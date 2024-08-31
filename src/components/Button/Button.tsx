interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children:React.ReactNode;
    className?:string;
}

const Button:React.FC<Props> = ({children,className='', ...rest}:Props) =>{
return(
    <button className={className} {...rest}>{children}</button>
)
}

export default Button