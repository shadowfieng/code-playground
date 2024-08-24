import { OnMount } from "@monaco-editor/react";
import {
  createContext,
  MutableRefObject,
  PropsWithChildren,
  useContext,
  useMemo,
  useRef
} from "react";

type EditorInstance = Pick<Parameters<OnMount>[0], "getValue">;

const PlaygroundContext = createContext<{
  editorInstance: Readonly<MutableRefObject<EditorInstance | null>>;
  setEditorInstance: (instance: EditorInstance) => void;
} | null>(null);
const usePlaygroundContext = () => {
  const context = useContext(PlaygroundContext);

  if (!context)
    throw new Error(
      "PlaygroundContext should be used within PlaygroundProvider"
    );

  return context;
};

const PlaygroundProvider = ({ children }: PropsWithChildren) => {
  const editorInstanceRef = useRef<EditorInstance | null>(null);

  const value = useMemo(() => {
    return {
      editorInstance: editorInstanceRef,
      setEditorInstance(instance: EditorInstance) {
        editorInstanceRef.current = {
          getValue: () => instance.getValue()
        };
      }
    };
  }, []);

  return (
    <PlaygroundContext.Provider value={value}>
      {children}
    </PlaygroundContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export { PlaygroundContext, PlaygroundProvider, usePlaygroundContext };
