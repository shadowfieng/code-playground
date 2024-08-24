import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from "../ui/resizable";
import { Editor } from "./editor";

export const Playground = () => {
  return (
    <div className="flex playground">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>
          <Editor />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <div>Output</div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};
