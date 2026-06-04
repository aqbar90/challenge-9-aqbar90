interface MovieRankBadgeProps {
  rank: number;
}

export default function MovieRankBadge({ rank }: MovieRankBadgeProps) {
  return (
    <div
      className="
        absolute
        left-3
        top-3
        z-10
        flex
        h-8
        w-8
        items-center
        justify-center
        rounded-full
        bg-[#2A2940]
        text-sm
        font-semibold
        text-neutral-25
        backdrop-blur-md
      "
    >
      {rank}
    </div>
  );
}
