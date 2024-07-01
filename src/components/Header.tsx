import DropdownMenu from "./DropdownMenu"
import MenuItem from './Menu/MenuItem'

const Header:React.FC = () => {
    return(
        <>
            <header className='flex justify-between pt-5'>
                <div className='ml-10p'>DANIAL</div>
                <button className='mr-10p md:hidden'>hamburger</button>
                <nav className='mr-10p hidden md:block'>
                    <MenuItem path={'/'}>Home</MenuItem>
                    <MenuItem path={'projects'}>Projects</MenuItem>
                    <MenuItem path={'projects'}>Resume</MenuItem>
                    {/* <h1 className='md:hidden'>HAMBURGER</h1>
                    <div className='md:flex'>
                        <h1 className='border-t border-gray-600'>Home</h1>
                        <h1 className='border-t border-gray-600'>Projects</h1>
                        <h1 className='border-y border-gray-600'>Resume</h1> 
                    </div> */}
                </nav>
            </header>
            <DropdownMenu/>
        </>
        
    )
}

export default Header;

