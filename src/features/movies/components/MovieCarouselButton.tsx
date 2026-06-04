import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback } from 'react';
import MovieCard from './MovieCard';
import type { Movie } from '../types/movie';

interface MovieCarouselProps {
  movies: Movie[];
}

export default function MovieCarousel({ movies }: MovieCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    dragFree: true,
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      {/* Desktop Navigation */}

      <button
        onClick={scrollPrev}
        className="
          hidden
          lg:flex
          absolute
          left-0
          top-1/2
          z-20
          -translate-y-1/2
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-neutral-900/90
          text-neutral-25
          transition-all
          duration-300
          hover:scale-105
        "
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={scrollNext}
        className="
          hidden
          lg:flex
          absolute
          right-2
          top-1/2
          z-20
          -translate-y-1/2
          h-14
          w-14
          border-none
          items-center
          justify-center
          rounded-full
          shadow-lg
          bg-neutral-900/90
          text-neutral-25
          transition-all
          duration-300
          hover:scale-105
        "
      >
        <ChevronRight size={20} />
      </button>

      {/* Embla */}

      <div
        ref={emblaRef}
        className="
          overflow-hidden
        "
      >
        <div
          className="
            flex
            gap-4
          "
        >
          {movies.map((movie, index) => (
            <div
              key={movie.id}
              className="
                shrink-0
                basis-42.5
                md:basis-47.5
                lg:basis-45
              "
            >
              <MovieCard
                key={movie.id}
                rank={index + 1}
                title={movie.title}
                posterPath={movie.poster_path!}
                rating={movie.vote_average}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
