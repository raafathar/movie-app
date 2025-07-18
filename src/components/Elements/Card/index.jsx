const Card = ({ movie }) => {
    return (
        <div className="scale-90 hover:scale-100 transition">
            <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={`${movie.title}`}
            width = {1280}
            height = {1280}
            className="w-44 h-44 mb-3 rounded-lg"
            loading="lazy"
            />
            <div className="w-44 h-fit text-center md:text-lg text-sm tracking-tight leading-normal text-clip font-semibold text-black/[0.8]">{movie.original_title}</div>
        </div>
    )
};

export default Card;
