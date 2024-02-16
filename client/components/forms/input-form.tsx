import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { IconType } from "react-icons/lib";
import { cn } from "@/lib/utils";

interface InputFormProps {
  id?: string;
  label?: string;
  name?: string;
  value?: string;
  icon: IconType;
  white?: boolean;
  placeholder?: string;
  type?: "text" | "password";
  onBlur?: any;
  onChange?: (e: any) => void;
}

const InputForm: React.FC<InputFormProps> = ({
  name,
  type,
  value,
  label,
  white,
  onBlur,
  onChange,
  icon: Icon,
  placeholder,
}) => {
  return (
    <div>
      <Label className={cn("", white ? "text-white" : "text-black")}>
        {label}
      </Label>
      <div className="relative">
        <Input
          name={name}
          type={type}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          placeholder={placeholder}
          className={cn(
            "pr-8",
            white
              ? "text-white bg-transparent border border-white placeholder:text-white"
              : "text-black bg-white placeholder:text-black"
          )}
        />
        <Icon
          size={20}
          className={cn(
            "absolute top-1/2 -translate-y-1/2 right-2",
            white ? "text-white" : "text-black"
          )}
        />
      </div>
    </div>
  );
};

export default InputForm;
