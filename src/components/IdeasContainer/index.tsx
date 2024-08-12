import { useState, useContext, useEffect } from "react";

import { ideasContext } from "../../context/ideasContext";

import { Context } from "../../types";

import { IdeaTile } from "../IdeaTile";

export const IdeasContainer = () => {
  const { ideas } = useContext(ideasContext) as Context;

  const [sortedIdeas, setSortedIdeas] = useState(ideas);

  const orderingValues = ["Date", "Az"];

  const [targetValue, setTargetValue] = useState("");

  useEffect(() => {
    sortIdeas(targetValue);
  }, [ideas]);

  function sortIdeas(value: string) {
    setTargetValue(value as string);

    let sortedIdeas = [...ideas];

    switch (value) {
      case orderingValues[0]:
        sortedIdeas.sort((x, y) => y.timestamp - x.timestamp);
        break;
      case orderingValues[1]:
        sortedIdeas.sort((x, y) => x.title.localeCompare(y.title));
        break;

      default:
        sortedIdeas.sort((x, y) => y.timestamp - x.timestamp);
    }

    setSortedIdeas(sortedIdeas);
  }

  return (
    <div>
      {ideas.length > 0 ? (
        <div>
          <div className="py-6 px-2 text-white flex justify-center">
            <label className="mt-1 font-bold">Sort by: </label>
            <select className="rounded ml-2 text-slate-900 p-1" onChange={(e) => sortIdeas(e.target.value)}>
              {orderingValues.map((value, index) => (
                <option
                  key={index}
                  value={value}
                  selected={value === targetValue}
                >
                  {value}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center place-items-center h-4/6">
            {sortedIdeas.map((element) => (
              <IdeaTile key={element.id} idea={element} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <p className="text-center text-xl p-3 text-slate-100 mt-12">
            You haven't added any ideas yet.
          </p>
        </div>
      )}
      <div className="p-12"></div>
    </div>
  );
};


