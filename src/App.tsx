import IdeasContext from "./context/ideasContext";
import IdeasContainer from "./components/IdeasContainer";
import CreateIdeaButton from "./components/CreateIdeaButton";

function App() {
  return (
    <IdeasContext>
      <div className="font-lobster bg-dark text-light text-center text-4xl p-4">
        Idea Board
      </div>
      <IdeasContainer />
      <CreateIdeaButton />
    </IdeasContext>
  );
}

export default App;
