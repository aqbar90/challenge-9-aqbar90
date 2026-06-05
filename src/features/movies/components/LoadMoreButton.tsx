import { Button } from '@/components/ui/button';

interface Props {
  onClick: () => void;
}

export default function LoadMoreCard({ onClick }: Props) {
  return (
    <div
      className="
        absolute
        left-1/2
        bottom-33.5
        z-20
        -translate-x-1/2
      "
    >
      <Button
        variant="movieOutline"
        className="
          w-50
          h-11
          lg:w-57.5
          lg:h-13
          rounded-full
          bg-[#0A0D12]
          backdrop-blur-md
          border-neutral-900
          hover:bg-neutral-900
        "
        onClick={onClick}
      >
        <span
          className="
        text-md
        leading-md
        font-semibold
        font-primary
        "
        >
          Load More
        </span>
      </Button>
    </div>
  );
}
