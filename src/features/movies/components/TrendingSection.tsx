import { useTrendingMovies } from '../hooks/useTrendingMovies';
import MovieCarousel from '@/features/movies/components/MovieCarousel';

export default function TrendingSection() {
  const { data, isLoading } = useTrendingMovies();

  if (isLoading) {
    return null;
  }

  const movies = data?.results.filter((movie) => movie.poster_path).slice(0, 20) ?? [];

  return (
    <section
      className="
        px-4
        py-8
        md:px-8
        lg:px-16
      "
    >
      <h2
        className="
          mb-6
          text-display-xs
          font-bold
          text-neutral-25
        "
      >
        Trending Now
      </h2>

      <MovieCarousel movies={movies} />
    </section>
  );
}
