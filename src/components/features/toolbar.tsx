import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export const Toolbar = () => {
  return (
    <div className="flex gap-8 py-4 border-b-2">
      <Button>Run</Button>
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
