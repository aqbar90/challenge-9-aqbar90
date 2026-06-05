import { useEffect, useState } from 'react';
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies';

import NewReleaseGrid from './NewReleaseGrid';
import LoadMoreButton from './LoadMoreButton';

export default function NewReleaseSection() {
  const { data, isLoading } = useNowPlayingMovies();

  const getInitialVisibleCount = () => {
    const width = window.innerWidth;

    if (width >= 1024) return 15; // Desktop
    if (width >= 768) return 12; // Tablet

    return 8; // Mobile
  };

  const [visibleCount, setVisibleCount] = useState(getInitialVisibleCount());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getInitialVisibleCount());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const allMovies = data?.results ?? [];

  const visibleMovies = allMovies.slice(0, visibleCount);

  const hasMore = visibleCount < allMovies.length;

  const handleLoadMore = () => {
    const width = window.innerWidth;

    if (width >= 1024) {
      setVisibleCount((prev) => prev + 5);
    } else if (width >= 768) {
      setVisibleCount((prev) => prev + 6);
    } else {
      setVisibleCount((prev) => prev + 4);
    }
  };

  if (isLoading) {
    return null;
  }

  return (
    <section
      className="
        px-4
        py-12
        md:px-8
        lg:px-11xl
        lg:py-20
      "
    >
      <h2
        className="
          mb-8
          text-display-xs
          font-bold
          text-neutral-25
          lg:text-display-sm
        "
      >
        New Release
      </h2>

      <div className="relative">
        <NewReleaseGrid movies={visibleMovies} />

        {/* Fade Overlay */}
        {hasMore && (
          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              h-335
              bg-linear-to-t
              from-background
              via-background/10
              to-transparent
              z-10
            "
          />
        )}

        {/* Load More */}
        {hasMore && <LoadMoreButton onClick={handleLoadMore} />}
      </div>
    </section>
  );
}
