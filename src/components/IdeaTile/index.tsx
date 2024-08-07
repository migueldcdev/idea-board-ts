import { useContext, useState } from "react";
import Confetti from "react-confetti";

import { ideasContext } from "../../context/ideasContext";

import { Idea, Context } from "../../types";

import unixToDate from "../../utils";

const IdeaTile = ({ idea }: { idea: Idea }) => {
  const { ideas, setIdeas } = useContext(ideasContext) as Context;

  const { id, title, description } = idea as Idea;

  const [inputTitle, setInputTitle] = useState(title);
  const [inputDescription, setInputDescription] = useState(description);

  const inputDescriptionLength = inputDescription.length;

  const [confetti, setConfetti] = useState(false);

  function deleteIdea() {
    const result = ideas.filter((idea: Idea) => idea.id !== id);

    setIdeas(result);
  }

  function handleChangeTitle(value: string) {
    setInputTitle(value);
  }

  function handleChangeDescription(value: string) {
    if (value.length <= 140) {
      setInputDescription(value);
    }
  }

  function updateIdea() {
    const index = ideas.findIndex((item) => item.id === id);
    if (index !== -1) {
      const updatedIdeas = [...ideas];

      const updatedIdea = {
        ...updatedIdeas[index],
        title: inputTitle,
        description: inputDescription,
        date: Date.now(),
        updated: true,
      };

      updatedIdeas[index] = updatedIdea;

      setIdeas(updatedIdeas);
      console.log(updatedIdeas);
      throwConfetti();
    }
  }

  function throwConfetti() {
    setConfetti(true);
    setTimeout(() => {
      setConfetti(false);
    }, 5000);
  }

  return (
    <div className="">
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
          onChange={(e) => handleChangeTitle(e.target.value)}
          value={inputTitle}
        />

        <textarea
          className="description"
          rows={4}
          cols={26}
          maxLength={140}
          onChange={(e) => handleChangeDescription(e.target.value)}
          value={inputDescription}
        />

        {inputDescriptionLength >= 110 && (
          <div className="char-count">{inputDescriptionLength}/140</div>
        )}
      </div>
      {title !== inputTitle || description !== inputDescription ? (
        <div className="flex-end-container">
          <button className="update-button" onClick={() => updateIdea()}>
            Update
          </button>
        </div>
      ) : (
        <button disabled style={{ backgroundColor: "red" }}>
          Update
        </button>
      )}
    </div>
  );
};

export default IdeaTile;
