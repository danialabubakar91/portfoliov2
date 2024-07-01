import DropdownMenu from "./DropdownMenu"

const Header:React.FC = () => {
    return(
        <>
            <header className='flex justify-between pt-5'>
                <div className='ml-10p'>DANIAL</div>
            
                <div className='mr-10p '>
                    <h1 className='md:hidden'>HAMBURGER</h1>
                    <div className='md:flex'>
                        <h1 className='border-t border-gray-600'>Home</h1>
                        <h1 className='border-t border-gray-600'>Projects</h1>
                        <h1 className='border-y border-gray-600'>Resume</h1> 
                    </div>
                    
                </div>
            </header>
            <DropdownMenu/>
        </>
        
    )
}

export default Header;

