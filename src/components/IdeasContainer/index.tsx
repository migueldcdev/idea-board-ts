import { useContext, useState } from "react";

import { ideasContext } from "../../context/ideasContext";

import { Context } from "../../types";

import { IdeaTile } from "../IdeaTile";

import { SortingOptions, sortIdeas } from "../../utils/ideas";

const sortingValues = ["Newest", "Oldest", "AZ", "ZA"];

export const IdeasContainer = () => {
  const { ideas } = useContext(ideasContext) as Context;

  const [sortOption, setSortOption] = useState<SortingOptions>("Newest");

  const sortedIdeas = sortIdeas(sortOption, ideas);

  function handleSort(value: SortingOptions) {
    setSortOption(value);
  }
  return (
    <main className="pb-32">
      {ideas.length > 0 ? (
        <div>
          <div className="py-6 px-2 text-white flex justify-center">
            <label className="mt-1 font-bold" htmlFor="sort">
              Sort by:{" "}
            </label>
            <select
              className="rounded ml-2 text-slate-900 p-1"
              id="sort"
              onChange={(e) => handleSort(e.target.value as SortingOptions)}
            >
              {sortingValues.map((value, index) => (
                <option key={index} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          <section className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center place-items-center h-4/6">
            {sortedIdeas.map((element) => (
              <IdeaTile key={element.id} idea={element} />
            ))}
          </section>
        </div>
      ) : (
        <section>
          <p className="text-center text-xl p-3 text-slate-100 mt-12">
            You haven't added any ideas yet.
          </p>
        </section>
      )}     
    </main>
  );
};
