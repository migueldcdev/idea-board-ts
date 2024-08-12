import { useContext } from "react";

import { ideasContext } from "../../context/ideasContext";

import { Context } from "../../types";

import { FaPlusCircle } from "react-icons/fa";

export const CreateIdeaButton = () => {
  const { createIdea } = useContext(ideasContext) as Context;

  return (
    <div className=" fixed bottom-0 w-full">
      <div className="bg-slate-900 blur-lg p-2 w-full"></div>
      <div className="w-full flex justify-center p-4 bg-slate-100">
        <FaPlusCircle
          className="text-slate-900 text-4xl cursor-pointer hover:text-slate-800"
          data-testid="create-button"
          onClick={createIdea}
        />
      </div>
    </div>
  );
};
