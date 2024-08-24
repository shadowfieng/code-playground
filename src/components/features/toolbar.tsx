import { usePlaygroundContext } from "@/context/playground-context";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

export const Toolbar = () => {
  const { editorInstance } = usePlaygroundContext();

  return (
    <div className="flex gap-8 py-4 border-b-2">
      <Button onClick={() => console.log(editorInstance.current?.getValue())}>
        Run
      </Button>
      {/* Select language */}
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Languages" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="js">Javascript</SelectItem>
          <SelectItem value="c#">C#</SelectItem>
          {/* <SelectItem value="system">System</SelectItem> */}
        </SelectContent>
      </Select>
    </div>
  );
};
