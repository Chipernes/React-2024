import {ChangeEvent, FC, FocusEvent} from "react";
import classNames from "classnames";

type TextInputProps = {
    required?: boolean,
    handleBlur: (event: FocusEvent<HTMLInputElement>) => void,
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void,
};

const TextInput: FC<TextInputProps> = ({required, handleBlur, handleInputChange}) => {
    const inputClasses = classNames(
        "border-b-2 w-80 focus:outline-none",
        { "focus:border-red-500": required }
    );

    return (
        <input
            type="text"
            placeholder="Your answer"
            className={inputClasses}
            onBlur={handleBlur}
            onChange={handleInputChange}
        />
    );
};

export default TextInput;