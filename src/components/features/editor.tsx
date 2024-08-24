import MonacoEditor, { OnMount } from "@monaco-editor/react";
import { usePlaygroundContext } from "@/context/playground-context";

export const Editor = () => {
  const { setEditorInstance } = usePlaygroundContext();

  const handleEditorMount: OnMount = (editor) => setEditorInstance(editor);

  return (
    <MonacoEditor
      height="90vh"
      defaultLanguage="javascript"
      defaultValue="// some comment"
      onMount={handleEditorMount}
    />
  );
};
