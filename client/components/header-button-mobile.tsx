import { AiOutlineMenu } from "react-icons/ai";

import {
  Sheet,
  SheetTitle,
  SheetHeader,
  SheetContent,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const HeaderButtonMobile = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant={"outline"} size={"icon"} className="sm:hidden">
          <AiOutlineMenu size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default HeaderButtonMobile;
