import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import { ideasContext } from "../../context/ideasContext";

import { Context } from "../../types";

import { FaPlusCircle } from "react-icons/fa";

const CreateIdeaButton = () => {
  const { ideas, setIdeas } = useContext(ideasContext) as Context;

  const idea = {
    id: uuidv4(),
    title: "",
    description: "",
    timestamp: Date.now(),
    updated: false,
  };

  function createNewTile() {
    setIdeas([...ideas, idea]);
  }

  return (
    <div className=" fixed bottom-0 w-full">
      <div className="bg-slate-900 blur-lg p-2 w-full"></div>
      <div className="w-full flex justify-center p-4 bg-slate-100">
        <FaPlusCircle
          className="text-slate-900 text-4xl cursor-pointer"
          data-testid="create-button"
          onClick={createNewTile}
        />
      </div>
    </div>
  );
};

export default CreateIdeaButton;
