import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

import CardCarousel from '../../Elements/CardCarousel';
import axios from 'axios';

const Carousel = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        
        const fetchMovies = async () => {
            try {
                const res = await axios.get('https://api.themoviedb.org/3/movie/popular', {
                    params: { language: 'en-US', page: '1' },
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjIxOTUzYzJiZDQwMDdkZjdlMWE4OTkzYzQxZDMxZiIsIm5iZiI6MTcwNDcxNTk1NS4xMDQsInN1YiI6IjY1OWJlNmIzMGQxMWYyMjJkYzc0OWE4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QoMtR-Ouhf5Z8sxqEOuC5gRTyL84qPwiCIHndveHMTM'
                    }
                });
                setMovies(res.data.results);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <>
            <div className="w-full px-5">
                <Swiper
                    effect="cards"
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                >
                    {movies.map((movie) => (
                        <SwiperSlide key={movie.id} className="rounded-2xl">
                            <CardCarousel movie={movie} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default Carousel;
