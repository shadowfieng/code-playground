import { Header } from "@/components/common/header";
import { Playground } from "./components/features/playground";
import { Toolbar } from "./components/features/toolbar";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Toolbar />
        <Playground />
      </div>
    </>
  );
}

export default App;
