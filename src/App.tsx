import { IdeasContext } from "./context/ideasContext";
import { IdeasContainer } from "./components/IdeasContainer";
import { CreateIdeaButton } from "./components/CreateIdeaButton";

function App() {
  return (
    <IdeasContext>
      <header className="font-lobster bg-slate-100 text-slate-900 text-center text-4xl p-6">
        Idea Board
      </header>
      <IdeasContainer />
      <CreateIdeaButton />
    </IdeasContext>
  );
}

// eslint-disable-next-line import/no-default-export
export default App;
