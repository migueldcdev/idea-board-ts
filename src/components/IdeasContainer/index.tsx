import { useState, useContext } from "react";

import { ideasContext } from "../../context/ideasContext";

import { Context } from "../../types";

import IdeaTile from "../IdeaTile";

const IdeasContainer = () => {
  const { ideas } = useContext(ideasContext) as Context;

  const [sortedIdeas, setSortedIdeas] = useState(ideas);

  function sortIdeas(value: string) {
    switch (value) {
      case "Date":
        setSortedIdeas(ideas.sort((x, y) => y.date - x.date));
        break;
      case "Az":
        setSortedIdeas(ideas.sort((x, y) => x.title.localeCompare(y.title)));
        break;

      default:
        setSortedIdeas(ideas.sort((x, y) => y.date - x.date));
    }
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
                <option value={"Az"}>A-Z </option>
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
