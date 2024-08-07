import { useState, useContext, useEffect } from "react";

import { ideasContext } from "../../context/ideasContext";

import { Context } from "../../types";

import IdeaTile from "../IdeaTile";

const IdeasContainer = () => {
  const { ideas } = useContext(ideasContext) as Context;

  const [sortedIdeas, setSortedIdeas] = useState(ideas);

  const [targetValue, setTargetValue] = useState("");

  useEffect(() => {
    sortIdeas(targetValue);
  }, [ideas]);

  function sortIdeas(value?: string) {
    setTargetValue(value as string);

    let sortedIdeas = [...ideas];

    switch (value) {
      case "Date":
        sortedIdeas.sort((x, y) => y.date - x.date);
        break;
      case "Az":
        sortedIdeas.sort((x, y) => x.title.localeCompare(y.title));
        break;

      default:
        sortedIdeas.sort((x, y) => y.date - x.date);
    }

    setSortedIdeas(sortedIdeas);
  }

  return (
    <div>
      {ideas.length > 0 ? (
        <div>
          <div className="flex-start-container">
            <div className="select-order">
              <label>Sort by: </label>
              <select onChange={(e) => sortIdeas(e.target.value)}>
                <option value={"Date"}>Date</option>
                <option value={"Az"}>A-Z</option>
              </select>
            </div>
          </div>
          <div className="IdeasContainer hide-scrollbar">
            {sortedIdeas.map((element) => (
              <IdeaTile key={element.id} idea={element} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <p className="no-ideas">You haven't added any ideas yet.</p>
        </div>
      )}
    </div>
  );
};

export default IdeasContainer;
