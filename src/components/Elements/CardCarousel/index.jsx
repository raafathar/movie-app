const CardCarousel = ({ movie }) => {
    return (
        <div className='w-full h-[14rem] sm:h-[16rem] md:h-[20rem] lg:h-[24rem]  xl:h-[28rem] 2xl:h-[32rem]'>
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full brightness-50 block"
            />
            <div className='absolute inset-y-0 start-0 flex lg:items-center items-end pb-10 lg:p-10 p-5 pointer-events-none'>
                <div className="flex justify-start flex-col gap-2 text-left">
                    <h1 className="md:text-3xl font-semibold text-xl text-white">{movie.original_title}</h1>
                    <p className="text-white/[0.6] text-xs md:text-base hidden lg:block">{movie.overview}</p>
                </div>
            </div>
        </div>
    );
};

export default CardCarousel;
