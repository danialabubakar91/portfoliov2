import {Link} from 'react-router-dom'

interface Props {
    children: React.ReactNode;
    path: string;
    className: string;
    defaultFunc?: ()=>void;
}

const MenuItem:React.FC<Props> = ({children, path, className, defaultFunc} : Props) => {
    return(
        <Link onClick={defaultFunc} className={className} to={path}>{children}</Link>
    )
}

export default MenuItem;