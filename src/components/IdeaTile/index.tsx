import { useContext, useState } from "react";

import { ideasContext } from "../../context/ideasContext";

import { Idea, Context } from "../../types";

import { unixToDate } from "../../utils";

export const IdeaTile = ({ idea }: { idea: Idea }) => {
  const { deleteIdea, updateIdea } = useContext(ideasContext) as Context;

  const { id, title, description } = idea as Idea;

  const [inputTitle, setInputTitle] = useState(title);
  const [inputDescription, setInputDescription] = useState(description);

  const inputDescriptionLength = inputDescription.length;

  function handleChangeTitle(value: string) {
    setInputTitle(value);
  }

  function handleChangeDescription(value: string) {
    if (value.length <= 140) {
      setInputDescription(value);
    }
  }

  function handleUpdateIdea() {
    updateIdea(id, { title: inputTitle, description: inputDescription });
  }

  return (
    <div className="bg-white rounded-lg w-5/6 md:4/6 px-4 pb-3 mt-6 md:mt-12">
      <div className="flex justify-between">
        <div className="text-indigo-600 mt-6 text-sm">
          {idea.updated ? "Updated " : "Created "}
          {unixToDate(idea.timestamp)}
        </div>
        <div>
          <button
            className="text-xl text-slate-800 cursor-pointer mt-2 hover:text-slate-600"
            onClick={() => deleteIdea(id)}
          >
            x
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          className="rounded-full mt-4 p-3 bg-slate-200 text-slate-900 focus:border-indigo-500"
          placeholder="Title"
          autoFocus
          onChange={(e) => handleChangeTitle(e.target.value)}
          value={inputTitle}
        />

        <textarea
          className="rounded-lg bg-slate-200 p-3 resize-none text-slate-900"
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
        {title !== inputTitle || description !== inputDescription ? (
          <button
            className="rounded-full bg-slate-800 text-white px-4 py-2 mt-3 ml-auto hover:bg-slate-600"
            onClick={handleUpdateIdea}
          >
            Update
          </button>
        ) : (
          <div className="py-6 mt-1"></div>
        )}
      </div>
    </div>
  );
};
