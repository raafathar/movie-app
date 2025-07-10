import Header from '../../Fragments/Header'

const MainLayout = ({ children }) => {
    return (
        <div className="flex flex-col items-center w-full h-full">
            <Header />
            {children}
        </div>
    );
};

export default MainLayout