import { Input, InputProps } from "@/components/ui/input";
import React from "react";
import { Control, Controller } from "react-hook-form";

interface IInputController extends InputProps {
  placeholder: string;
  control: Control<any>;
  name: string;
  title: string;
}

const InputController: React.FC<IInputController> = ({
  control,
  placeholder,
  name,
  title,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row justify-between">
        <span>{title}</span>
      </div>
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder={placeholder}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            className="focus-visible:border-red-50"
            {...props}
          />
        )}
        name={name}
      />
    </div>
  );
};

export default InputController;
