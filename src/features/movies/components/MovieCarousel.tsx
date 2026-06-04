import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import type { Movie } from '../types/movie';
import MovieCard from './MovieCard';

interface MovieCarouselProps {
  movies: Movie[];
}

export default function MovieCarousel({ movies }: MovieCarouselProps) {
  return (
    <Carousel
      opts={{
        align: 'start',
        dragFree: true,
      }}
      className="w-full relative"
    >
      <CarouselContent className="-ml-4">
        {movies.map((movie, index) => (
          <CarouselItem
            key={movie.id}
            className="
              pl-4
              basis-45
              md:basis-50
              lg:basis-47.5
            "
          >
            <MovieCard
              key={movie.id}
              rank={index + 1}
              title={movie.title}
              posterPath={movie.poster_path!}
              rating={movie.vote_average}
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Desktop Only */}

      <CarouselPrevious
        className="
          hidden
          lg:flex
          h-12
          w-12
          border-none
          bg-neutral-900/90
          text-neutral-25
          hover:bg-neutral-800
          backdrop-blur-md
        "
      />
      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          z-10
          hidden
          lg:block
          h-full
          w-40
          bg-linear-to-l
          from-background
          via-background/60
          to-transparent
        "
      />
      <CarouselNext
        className="
          hidden
          lg:flex
          z-20
          right-4
          h-14
          w-14
          border-none
          bg-neutral-900/95
          text-neutral-25
          shadow-xl
          hover:bg-neutral-800
        "
      />
    </Carousel>
  );
}
