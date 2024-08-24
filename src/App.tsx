import { Header } from "@/components/common/header";
import { Playground } from "@/components/features/playground";
import { Toolbar } from "@/components/features/toolbar";
import { PlaygroundProvider } from "@/context/playground-context";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <PlaygroundProvider>
          <Toolbar />
          <Playground />
        </PlaygroundProvider>
      </div>
    </>
  );
}

export default App;
