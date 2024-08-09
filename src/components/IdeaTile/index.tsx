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
        timestamp: Date.now(),
        updated: true,
      };

      updatedIdeas[index] = updatedIdea;

      setIdeas(updatedIdeas);

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
    <div className="bg-dark rounded w-5/6 md:4/6 px-4 pb-3 md:mt-12">
      <div className="mx-auto w-5/6">
        {confetti && (
          <Confetti
            numberOfPieces={100}
            gravity={0.2}
            recycle={false}
            className="mx-auto"
            width={300}
          ></Confetti>
        )}
      </div>

      <div className="flex justify-between">
        <div className="text-primary mt-4 text-sm">
          {idea.updated ? "Updated " : "Created "}
          {unixToDate(idea.timestamp)}
        </div>
        <div>
          <button className="text-xl text-secondary" onClick={deleteIdea}>
            x
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          className="rounded mt-2"
          placeholder="Title"
          autoFocus
          onChange={(e) => handleChangeTitle(e.target.value)}
          value={inputTitle}
        />

        <textarea
          className="rounded"
          rows={4}
          cols={26}
          maxLength={140}
          onChange={(e) => handleChangeDescription(e.target.value)}
          value={inputDescription}
        />
      </div>
      <div className="flex justify-between">
        {inputDescriptionLength >= 110 && (
          <div className="text-sm text-light mt-1">
            {inputDescriptionLength}/140
          </div>
        )}
        {(title !== inputTitle || description !== inputDescription) && (
          <button
            className="rounded bg-primary text-light px-2 py-1 mt-3 ml-auto"
            onClick={updateIdea}
          >
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default IdeaTile;
