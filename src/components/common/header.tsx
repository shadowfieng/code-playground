import { Avatar, AvatarImage } from "../ui/avatar";

export const Header = () => {
  return (
    <header className="flex p-4 items-center justify-between border-b-2">
      <a>Logo</a>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
      </Avatar>
    </header>
  );
};
