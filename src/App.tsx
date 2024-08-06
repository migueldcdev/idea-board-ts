import IdeasContext from "./context/ideasContext";
import IdeasContainer from "./components/IdeasContainer";
import CreateIdeaButton from "./components/CreateIdeaButton";

function App() {
  return (
    <IdeasContext>
      <div className="">Idea Board</div>
      <IdeasContainer />
      <CreateIdeaButton />
    </IdeasContext>
  );
}

export default App;
