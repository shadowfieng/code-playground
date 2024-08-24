import { Header } from "@/components/common/header";
import { Playground } from "./components/features/playground";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Playground />
      </div>
    </>
  );
}

export default App;
