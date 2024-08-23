import { useContext } from "react";

import { ideasContext } from "../../context/ideasContext";
import { Context } from "../../types";

export const CreateIdeaButton = () => {
  const { createIdea } = useContext(ideasContext) as Context;

  return (
    <div className=" fixed bottom-0 w-full bg-slate-100">
      <div className="bg-slate-900 blur-lg p-2 w-full" />
      <div className="w-full flex justify-center">
        <button
          className="p-4 rounded-full bg-indigo-800 hover:bg-indigo-700 mt-3 my-5 text-slate-100"
          onClick={createIdea}
        >
          Create idea
        </button>
      </div>
    </div>
  );
};
