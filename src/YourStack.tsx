import type { Technology } from "./technology";

type YourStackProps = {
  stack: Technology[];
  onRemove: (technology: Technology) => void;
  onRemoveAll: () => void;
};

export default function YourStack({
  stack,
  onRemove,
  onRemoveAll,
}: YourStackProps) {
  return (
    <aside className="h-fit rounded-2xl border border-white/10 bg-[#111015] p-5 lg:sticky lg:top-24">

      {/* ================= HEADER ================= */}
      <div className="flex items-start justify-between gap-3">

        <div>
          <h2 className="text-xl font-semibold text-white">
            Your Stack
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {stack.length}{" "}
            {stack.length === 1 ? "Technology" : "Technologies"} Selected
          </p>
        </div>

        {/* Count */}
        <div
          className="flex h-9 min-w-9 items-center justify-center rounded-full px-2 text-sm font-bold text-white"
          style={{
            background:
              "linear-gradient(110deg, #ff8a1f, #ff3f9f, #7c4dff)",
          }}
        >
          {stack.length}
        </div>

      </div>

      {/* ================= EMPTY STATE ================= */}
      {stack.length === 0 ? (
        <div className="mt-6 rounded-xl border border-dashed border-white/10 bg-white/[0.02] px-5 py-10 text-center">

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-xl">
            +
          </div>

          <h3 className="mt-4 text-sm font-medium text-gray-300">
            Your stack is empty
          </h3>

          <p className="mt-2 text-xs leading-5 text-gray-500">
            Add technologies from the list to build your developer stack.
          </p>

        </div>
      ) : (
        <>
          {/* ================= SELECTED ITEMS ================= */}
          <div className="mt-5 flex flex-col gap-3">

            {stack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3"
              >

                {/* Icon */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 p-2">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Name + Category */}
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-medium text-white">
                    {technology.name}
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    {technology.category}
                  </p>
                </div>

                {/* Remove */}
                <button
                  type="button"
                  onClick={() => onRemove(technology)}
                  aria-label={`Remove ${technology.name}`}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-gray-500 transition hover:bg-red-500/10 hover:text-red-400"
                >
                  ✕
                </button>

              </div>
            ))}

          </div>

          {/* ================= REMOVE ALL ================= */}
          <button
            type="button"
            onClick={onRemoveAll}
            className="mt-5 w-full rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm font-medium text-red-400 transition hover:bg-red-500/10"
          >
            Remove All
          </button>
        </>
      )}

    </aside>
  );
}