import type { Technology } from "./technology";

type TechnologyCardProps = {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
};

export default function TechnologyCard({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-[#111015] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl">

      {/* ================= TOP ================= */}
      <div className="flex items-start justify-between">

        {/* Icon + Badge */}
        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2.5">
            <img
              src={technology.icon}
              alt={technology.name}
              className="h-full w-full object-contain"
            />
          </div>

          <span
            className="rounded-full px-3 py-1 text-xs font-medium text-white"
            style={{
              background:
                "linear-gradient(110deg, #ff8a1f, #ff3f9f, #7c4dff)",
            }}
          >
            {technology.badge}
          </span>

        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <span className="text-yellow-400">★</span>

          <span className="text-sm font-medium text-gray-300">
            {technology.rating}
          </span>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="mt-5 flex-1">

        <h3 className="text-xl font-semibold text-white">
          {technology.name}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-400">
          {technology.description}
        </p>

      </div>

      {/* ================= META ================= */}
      <div className="mt-5 flex flex-wrap items-center gap-2">

        {/* Category */}
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300">
          {technology.category}
        </span>

        {/* Difficulty */}
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-400">
          {technology.difficulty}
        </span>

      </div>

      {/* ================= BUTTON ================= */}
      <button
        type="button"
        disabled={isAdded}
        onClick={() => onAdd(technology)}
        className={`mt-5 w-full rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
          isAdded
            ? "cursor-not-allowed border border-green-500/20 bg-green-500/10 text-green-400"
            : "text-white hover:scale-[1.02] hover:shadow-lg"
        }`}
        style={
          !isAdded
            ? {
                background:
                  "linear-gradient(110deg, #ff8a1f, #ff3f9f, #7c4dff)",
              }
            : undefined
        }
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>

    </div>
  );
}