import MainLayout from '../../Layouts/LandingPage';
import Carousel from '../../Fragments/Carousel';
import MovieGrid from '../../Fragments/MovieGrid';

const Home = () => {
    return (
        <MainLayout>
            <Carousel/>
            <MovieGrid/>
        </MainLayout>
    );
};

export default Home;