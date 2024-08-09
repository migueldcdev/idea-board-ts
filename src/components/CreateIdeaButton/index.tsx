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
    <div className="bg-dark flex justify-center items-center p-4 fixed bottom-0 w-full">
      <FaPlusCircle
        className="text-light text-4xl "
        data-testid="create-button"
        onClick={createNewTile}
      />
    </div>
  );
};

export default CreateIdeaButton;
