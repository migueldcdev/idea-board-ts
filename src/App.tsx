import { IdeasContext } from "./context/ideasContext";
import { IdeasContainer } from "./components/IdeasContainer";
import { CreateIdeaButton } from "./components/CreateIdeaButton";

function App() {
  return (
    <IdeasContext>
      <header className="font-lobster bg-slate-100 text-slate-900 text-center text-4xl p-4">
        Idea Board
      </header>
      <IdeasContainer />
      <CreateIdeaButton />
    </IdeasContext>
  );
}

export default App;
