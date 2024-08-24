import MonacoEditor from "@monaco-editor/react";
import { useState } from "react";

export const Editor = () => {
  const [value, setValue] = useState('')

  return <MonacoEditor height="90vh" defaultLanguage="javascript" defaultValue="// some comment"/>;
};
