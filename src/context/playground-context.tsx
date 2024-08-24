import { createReadonlyProxyObject } from "@/lib";
import { OnMount } from "@monaco-editor/react";
import {
  ContextType,
  createContext,
  MutableRefObject,
  PropsWithChildren,
  useContext,
  useMemo,
  useRef
} from "react";

type IEditor = Parameters<OnMount>[0];
type EditorInstance = Pick<IEditor, "getValue">;
type EditorContextValue = ContextType<typeof PlaygroundContext>;

const PlaygroundContext = createContext<{
  editorInstance: Readonly<MutableRefObject<EditorInstance | null>>;
  setEditorInstance: (instance: IEditor) => void;
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

  const value = useMemo<EditorContextValue>(() => {
    return {
      editorInstance: createReadonlyProxyObject(editorInstanceRef),
      setEditorInstance(instance) {
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
