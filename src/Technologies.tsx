import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

import type { Technology } from "./technology";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Language",
  "Styling",
  "DevOps",
  "Tools",
];

export default function Technologies() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        setLoading(true);

        const response = await fetch("/technologies.json");

        if (!response.ok) {
          throw new Error("Failed to fetch technologies");
        }

        const data: Technology[] = await response.json();

        setTechnologies(data);
      } catch (error) {
        console.error(error);

        toast.error("Failed to load technologies.");
      } finally {
        setLoading(false);
      }
    };

    fetchTechnologies();
  }, []);

  const filteredTechnologies = useMemo(() => {
    if (selectedCategory === "All") {
      return technologies;
    }

    return technologies.filter(
      (technology) => technology.category === selectedCategory
    );
  }, [technologies, selectedCategory]);

  const addToStack = (technology: Technology) => {
    const alreadyExists = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyExists) {
      toast.warning(
        `${technology.name} is already in your stack.`
      );

      return;
    }

    setStack((previousStack) => [
      ...previousStack,
      technology,
    ]);

    toast.success(
      `${technology.name} added to your stack.`
    );
  };
  const removeFromStack = (technology: Technology) => {
    setStack((previousStack) =>
      previousStack.filter(
        (item) => item.id !== technology.id
      )
    );

    toast.info(
      `${technology.name} removed from your stack.`
    );
  };

  const removeAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);

    toast.info("All technologies removed from your stack.");
  };

  return (
    <section
      id="technologies"
      className="bg-[#08070b] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        <div className="max-w-2xl">

          <span
            className="text-sm font-semibold uppercase tracking-wider"
            style={{
              background:
                "linear-gradient(110deg, #ff8a1f, #ff3f9f, #7c4dff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Technology Library
          </span>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Choose Your
            <span
              className="ml-2"
              style={{
                background:
                  "linear-gradient(110deg, #ff8a1f, #ff3f9f, #7c4dff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Technologies
            </span>
          </h2>

          <p className="mt-4 text-gray-400">
            Explore popular technologies and add them to your
            personal developer stack.
          </p>

        </div>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2">

          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
                selectedCategory === category
                  ? "text-white shadow-md"
                  : "border border-white/10 bg-white/5 text-gray-400 hover:text-white"
              }`}
              style={
                selectedCategory === category
                  ? {
                      background:
                        "linear-gradient(110deg, #ff8a1f, #ff3f9f, #7c4dff)",
                    }
                  : undefined
              }
            >
              {category}
            </button>
          ))}

        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div>

            {loading ? (
              <div className="flex min-h-80 items-center justify-center rounded-2xl border border-white/10 bg-[#111015]">

                <div className="text-center">
                  <div
                    className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-white/10 border-t-pink-500"
                  />

                  <p className="mt-4 text-sm text-gray-400">
                    Loading technologies...
                  </p>

                </div>

              </div>
            ) : filteredTechnologies.length === 0 ? (
              <div className="rounded-2xl border border-white/10 bg-[#111015] p-10 text-center">
                <p className="text-gray-400">
                  No technologies found.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

                {filteredTechnologies.map((technology) => (
                  <TechnologyCard
                    key={technology.id}
                    technology={technology}
                    isAdded={stack.some(
                      (item) => item.id === technology.id
                    )}
                    onAdd={addToStack}
                  />
                ))}

              </div>
            )}

          </div>

          <YourStack
            stack={stack}
            onRemove={removeFromStack}
            onRemoveAll={removeAll}
          />

        </div>
      </div>
    </section>
  );
}