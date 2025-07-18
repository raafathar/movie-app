import React, { useEffect, useState, useRef, useCallback } from 'react';
import axios from 'axios';
import Card from '../../Elements/Card';

const MovieGrid = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const loader = useRef(null);

    const fetchMovies = async (pageNum) => {
        try {
            const res = await axios.get('https://api.themoviedb.org/3/discover/movie', {
                params: {
                    language: 'en-US',
                    sort_by: 'popularity.desc',
                    page: pageNum,
                },
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjIxOTUzYzJiZDQwMDdkZjdlMWE4OTkzYzQxZDMxZiIsIm5iZiI6MTcwNDcxNTk1NS4xMDQsInN1YiI6IjY1OWJlNmIzMGQxMWYyMjJkYzc0OWE4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QoMtR-Ouhf5Z8sxqEOuC5gRTyL84qPwiCIHndveHMTM'
                }
            });

            if (res.data.results.length > 0) {
                setMovies(prev => {
                    const ids = new Set(prev.map(movie => movie.id));
                    const newMovies = res.data.results.filter(movie => !ids.has(movie.id));
                    return [...prev, ...newMovies];
                });
            } else {
                setHasMore(false); // tidak ada data lagi
            }
        } catch (error) {
            console.error('Error fetching discover movies:', error);
        }
    };

    useEffect(() => {
        fetchMovies(page);
    }, [page]);

    const handleObserver = useCallback((entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasMore) {
            setPage(prev => prev + 1);
        }
    }, [hasMore]);

    useEffect(() => {
        const option = {
            root: null,
            rootMargin: '20px',
            threshold: 1.0,
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (loader.current) observer.observe(loader.current);

        return () => {
            if (loader.current) observer.unobserve(loader.current);
        };
    }, [handleObserver]);

    return (
        <>
            <div className="w-full h-fit p-2 lg:p-0">
                <div className="flex items-center justify-between">
                    <h1 className="text-left font-semibold md:text-3xl text-xl text-black">Discover Movies</h1>
                    <form>
                        <select className="px-2 py-3 bg-gray-100 rounded-md text-sm outline-none">
                            <option value="">All</option>
                            <option value="">Latest</option>
                            <option value="">Top Rating</option>
                        </select>
                    </form>
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
                {movies.map(movie => (
                    <Card key={movie.id} movie={movie} />
                ))}
            </div>

            <div ref={loader} className="h-10"></div>
        </>
    );
};

export default MovieGrid;
