import { Avatar, AvatarImage } from "@/components/ui/avatar";

const AvatarButton = () => {
  return (
    <div className="flex items-center gap-2">
      <Avatar className="border-2">
        <AvatarImage src="/user.jpg" />
      </Avatar>
      <p className="text-sm font-bold hidden md:block">
        lucasferndias@gmail.com
      </p>
    </div>
  );
};

export default AvatarButton;
