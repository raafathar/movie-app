import ThemeSwitcher from '../../Elements/ThemeSwitcher';
import Header from '../../Fragments/Header'

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <ThemeSwitcher />
            <main className="flex flex-col justify-center items-center p-2 my-10 lg:w-1/2 w-full h-fit gap-10">
                {children}
            </main>
        </>

    );
};

export default MainLayout