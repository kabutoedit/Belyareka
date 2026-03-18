import { useState, type FC } from "react";
import PhoneInput from "react-phone-input-2";
import { twMerge } from "tailwind-merge";
import "react-phone-input-2/lib/style.css";

interface IProps {
  wrapperClass?: string;
  className?: string;
  collectorPhoneValue: (value: string) => void;
  name: string;
  label: string;
  error?: boolean;
}

const PhoneNumberInput: FC<IProps> = ({ wrapperClass, className, name, label, collectorPhoneValue, error }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [focused, setFocused] = useState<boolean>(false);

  const onBlurCollectorValue = () => {
    collectorPhoneValue(phoneNumber);
    setFocused(false);
  };

  const onFocused = () => {
    setFocused(true);
  };

  const valid_input = error ? "text-[#e5182580]" : "text-[#00afef80]";

  return (
    <div className={twMerge("relative w-full", wrapperClass)}>
      <PhoneInput
        inputClass={twMerge(className)}
        containerClass={`${error && "input__error"} ${!error && focused && "focused"} `}
        placeholder=""
        alwaysDefaultMask={true}
        onBlur={onBlurCollectorValue}
        onFocus={onFocused}
        value={phoneNumber}
        onChange={(phone) => setPhoneNumber(phone)}
        inputProps={{
          id: name,
          name,
        }}
      />

      <label
        htmlFor={name}
        className={`label__highlight cursor-text absolute left-3 transition-all bg-white px-[2px] ${
          phoneNumber || focused ? `-top-[8px] text-xs ${valid_input}` : `top-4 text-sm text-gray-400`
        }`}>
        {label}
      </label>
    </div>
  );
};

export default PhoneNumberInput;
