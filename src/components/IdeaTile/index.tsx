import { useContext, useState } from "react";
import Confetti from "react-confetti";

import { ideasContext } from "../../context/ideasContext";

import { Idea, Context } from "../../types";

import unixToDate from "../../utils";

const IdeaTile = ({ idea }: { idea: Idea }) => {
  const { ideas, setIdeas } = useContext(ideasContext) as Context;

  const { id, title, description } = idea as Idea;

  const [inputHasChanged, setInputHasChanged] = useState(false);

  const [descriptionCharCount, setDescriptionCharCount] = useState(
    description.length,
  );

  const [confetti, setConfetti] = useState(false);

  function deleteIdea() {
    const result = ideas.filter((idea: Idea) => idea.id !== id);

    setIdeas(result);
  }

  //substitute = title === idea.title
  // function handleChangeTitle(value) {
  //     setInputHasChanged(true)
  //     setTitle(value)
  // }

  // function handleChangeDescription(value) {

  //     if (value.length <= 140) { //need to enforce max length cause does not work on mobile
  //         setInputHasChanged(true)
  //         setDescriptionCharCount(value.length)
  //         setDescription(value)
  //     }

  // }

  // function updateIdea() {

  //     const ideas = JSON.parse(ideas)

  //     const id = idea.id

  //     const index = ideas.findIndex(item => item.id === id)

  //     ideas[index].title = title

  //     ideas[index].description = description

  //     ideas[index].date = Date.now()

  //     ideas[index].updated = true

  //     setIdeas(JSON.stringify(ideas))

  //     throwConfetti()

  //     setInputHasChanged(false)

  // }

  // function throwConfetti() {
  //     setConfetti(true)
  //     setTimeout(() => {
  //         setConfetti(false)
  //     }, 5000)

  // }

  return (
    <div className="tile">
      {confetti && (
        <Confetti numberOfPieces={100} gravity={0.2} recycle={false}></Confetti>
      )}

      <div className="flex-between-container">
        <div className="date">
          {idea.updated ? "Updated " : "Created "}
          {unixToDate(idea.date)}
        </div>
        <div>
          <button className="delete-button" onClick={() => deleteIdea()}>
            x
          </button>
        </div>
      </div>
      <div className="center-items">
        <input
          type="text"
          className="title"
          placeholder="Title"
          autoFocus
          // onChange={(e) => handleChangeTitle(e.target.value)}
          value={title}
        />

        <textarea
          className="description"
          rows={4}
          cols={26}
          maxLength={140}
          // onChange={(e) => handleChangeDescription(e.target.value)}
          value={description}
        ></textarea>

        {descriptionCharCount >= 110 && (
          <div className="char-count">{descriptionCharCount}/140</div>
        )}
      </div>
      {inputHasChanged && (
        <div className="flex-end-container">
          <button
            className="update-button"
            // onClick={() => updateIdea()}
          >
            Update
          </button>
        </div>
      )}
    </div>
  );
};

export default IdeaTile;
