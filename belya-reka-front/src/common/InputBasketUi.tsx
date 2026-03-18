import { type FocusEvent, type InputHTMLAttributes, type LegacyRef, forwardRef, useState } from "react";

type blurEndFocusEventType = FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>;
type TTextAreaAndInput = HTMLInputElement | HTMLTextAreaElement;

interface IInputBasketUiProps extends InputHTMLAttributes<TTextAreaAndInput> {
  classNameBox?: string;
  styleFocusedTop?: string;
  autoComplete?: string;
  label: string;
  error?: boolean;
}

const inputStyle = `block w-full rounded-md border border-solid py-1.5 pt-1 text-gray-900 shadow-sm ring-1 ring-inset ring-hexahrome border-ghost text-sm sm:leading-6 px-3 font-sans resize-none outline-1 box-border h-10 input__address `;

const InputBasketUi = forwardRef<TTextAreaAndInput, IInputBasketUiProps>(
  ({ className, onFocus, onBlur, type = "text", label, classNameBox, error = false, styleFocusedTop = "", ...props }, ref) => {
    const [focused, setFocused] = useState<boolean>(false);

    const onFocused = (event: blurEndFocusEventType) => {
      setFocused(true);
      if (onFocus) {
        onFocus(event);
      }
    };

    const onBlurHandler = (event: blurEndFocusEventType) => {
      if (onBlur) {
        onBlur(event);
      }

      setFocused(false);
    };

    const valid_input = error ? "text-[#e5182580]" : "text-[#00afef80]";

    return (
      <div className={`${classNameBox} relative`}>
        {type !== "textarea" ? (
          <input
            ref={ref as unknown as LegacyRef<HTMLInputElement>}
            type={type}
            className={`${inputStyle} ${error && "input__error"} ${className}`}
            id={props.name}
            name={props.name}
            onFocus={onFocused}
            onBlur={onBlurHandler}
            {...props}
          />
        ) : (
          <textarea
            ref={ref as unknown as LegacyRef<HTMLTextAreaElement>}
            className={`${inputStyle} ${error && "input__error"} h-[90%] table__scroll ${className}`}
            id={props.name}
            name={props.name}
            onFocus={onFocused}
            onBlur={onBlurHandler}
            {...props}
          />
        )}
        <label
          htmlFor={props.name}
          className={`label__highlight cursor-text absolute left-3 transition-all bg-white px-[2px] ${
            props.value || focused
              ? `-top-[10px] text-xs ${valid_input}`
              : `${styleFocusedTop ? styleFocusedTop : "top-[10px]"} text-sm text-gray-400`
          }`}>
          {label}
        </label>
      </div>
    );
  }
);

export default InputBasketUi;
