import {ChangeEvent, FC, FocusEvent} from "react";
import TextInput from "./TextInput.tsx";

type RadioInputProps = {
    options?: string[],
    otherAnswer?: boolean,
    required?: boolean
    handleBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    handleInputChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const RadioInput: FC<RadioInputProps> = ({required, options = [], otherAnswer, handleBlur, handleInputChange}) => {
    return (
        <div className="accent-red-500 mt-5">
            {options.map((option, index) => (
                <div key={index} className="mt-2">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            required={required}
                            name="radio"
                            className="w-5 h-5"
                        />
                        <span className="ml-3">{option}</span>
                    </label>
                </div>
            ))}
            {otherAnswer && (
                <div className="mt-2 flex items-center">
                    <label className="flex items-center mr-5">
                        <input
                            type="radio"
                            required={required}
                            name="radio"
                            className="w-5 h-5"
                        />
                        <span className="ml-3">Other: </span>
                    </label>

                    <TextInput handleBlur={() => handleBlur} handleInputChange={() => handleInputChange} required />

                </div>
            )}
        </div>
    );
};

export default RadioInput;