export const Playground = () => {
  return (
    <div className="flex playground">
      <div className="w-1/2">Editor</div>
      <div className="h-full w-[2px] bg-slate-800 cursor-col-resize" />
      <div className="w-1/2">Output</div>
    </div>
  );
};
