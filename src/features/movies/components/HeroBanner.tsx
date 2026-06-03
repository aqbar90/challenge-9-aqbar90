import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Movie } from '../types/movie';
import type { ReactNode } from 'react';

interface HeroBannerProps {
  movie: Movie;
  children?: ReactNode;
}

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

export default function HeroBanner({ movie, children }: HeroBannerProps) {
  return (
    <section
      className="
        -translate-y-25
        relative
        h-full
        max-w-screen
        overflow-hidden
      "
    >
      {/* BACKDROP */}

      <picture>
        <source media="(min-width: 768px)" srcSet={`${IMAGE_BASE_URL}${movie.backdrop_path}`} />

        <img
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
          className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          lg:object-center
        "
        />
      </picture>
      {/* DARK OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-linear-to-t
        from-black
        via-black/60
        to-black/20
        "
      />

      {/* HERO GRADIENT */}
      <div
        className="
          hero-gradient
          absolute
          inset-0
        "
      />

      {/* NAVBAR */}
      <div
        className="
          absolute
          top-0
          left-0
          right-0
          z-20
        "
      >
        {children}
      </div>

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-dvh
          max-w-width
          items-end
          px-4
          pt-55.75
          md:px-8
          md:pb-28
          lg:items-center
          lg:px-35.75
        "
      >
        <div
          className="
            max-w-155
          "
        >
          <h1
            className="
              text-neutral-25
              font-primary
              font-bold
              text-display-xs
              leading-display-xs
              md:text-display-lg
              lg:text-display-2xl
            "
          >
            {movie.title}
          </h1>
          <p
            className="
              mt-4
              text-neutral-400
              text-sm
              font-primary
              font-regular
              leading-sm
              md:text-base
              md:max-w-140
            "
          >
            {movie.overview}
          </p>

          <div
            className="
              mt-6
              flex
              flex-col
              gap-md
              p-md
              sm:flex-row
            "
          >
            <Button variant="movie" size="hero">
              Watch Trailer
              <span
                className="
                  ml-2
                  flex
                  h-4
                  w-4
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-red-700
                "
              >
                <Play
                  className="
                    size-2.5
                    fill-current
                  "
                />
              </span>
            </Button>

            <Button variant="movieOutline" size="hero">
              See Detail
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
