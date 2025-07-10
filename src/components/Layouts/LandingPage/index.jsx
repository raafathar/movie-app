import ThemeSwitcher from '../../Elements/ThemeSwitcher';
import Header from '../../Fragments/Header'

const MainLayout = ({ children }) => {
    return (
        <div className="flex flex-col items-center w-full h-full dark:bg-gray-800 bg-white">
            <Header />
            <ThemeSwitcher />
            {children}
        </div>
    );
};

export default MainLayout