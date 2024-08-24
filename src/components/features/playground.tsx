import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from "../ui/resizable";

export const Playground = () => {
  return (
    <div className="flex playground">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>
          <div>Editor</div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <div>Output</div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};
