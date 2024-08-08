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
    date: Date.now(),
    updated: false,
  };

  function createNewTile() {
    setIdeas([...ideas, idea]);
  }

  return (
    <div className="container">
      <FaPlusCircle className="button" data-testid="create-button" onClick={createNewTile} />
    </div>
  );
};

export default CreateIdeaButton;
