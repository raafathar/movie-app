import Logo from '../../Elements/Logo'
import InputSearch from '../../Elements/InputSearch'

const Header = () => {
    return (
        <header className="flex z-50 justify-center sticky top-0 w-full h-fit border-b border-slate-200 bg-white">
            <nav className="w-full lg:w-1/2 flex justify-between items-center p-4">
                <Logo />
                <InputSearch />
            </nav>
        </header>
    )
}


export default Header