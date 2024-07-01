import {Link} from 'react-router-dom'

interface Props {
    children: React.ReactNode;
    path: string;
}

const MenuItem:React.FC<Props> = ({children, path} : Props) => {
    return(
        <Link to={path}>{children}</Link>
    )
}

export default MenuItem;