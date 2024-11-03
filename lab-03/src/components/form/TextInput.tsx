import {ChangeEvent, FC, FocusEvent} from "react";
import classNames from "classnames";
import { Controller } from 'react-hook-form';

type TextInputProps = {
    required?: boolean,
    handleBlur: (event: FocusEvent<HTMLInputElement>) => void,
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void,
    control: any,
    name: string
};

const TextInput: FC<TextInputProps> = ({ control, required, handleBlur, handleInputChange, name}) => {
    const inputClasses = classNames(
        "border-b-2 w-80 focus:outline-none",
        { "focus:border-red-500": required }
    );

    return (
        <Controller
            control={control}
            name={name}
            rules={required ? { required } : undefined}
            render={({ field }) => (
                <input
                    type="text"
                    placeholder="Your answer"
                    className={inputClasses}
                    {...field}
                    onBlur={(e) => {
                        field.onBlur();
                        handleBlur(e);
                    }}
                    onChange={(e) => {
                        field.onChange(e);
                        handleInputChange(e);
                    }}
                />
            )}
        />
    );
};

export default TextInput;