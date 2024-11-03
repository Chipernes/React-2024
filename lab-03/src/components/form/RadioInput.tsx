import { FC } from "react";
import {Controller} from "react-hook-form";

type RadioInputProps = {
    options?: string[],
    hasOtherAnswer?: boolean,
    required?: boolean
    control: any,
    name: string,
};

const RadioInput: FC<RadioInputProps> = ({ control, name, required, options = [], hasOtherAnswer}) => {
    return (
        <>
            <div className="accent-red-500 mt-5">
                {options.map((option, index) => (
                    <div key={index} className="mt-2">
                        <label className="flex items-center">
                            <Controller
                                control={control}
                                name={name}
                                rules={required ? { required } : undefined}
                                render={({ field }) => (
                                    <input
                                        type="radio"
                                        required={required}
                                        className="w-5 h-5"
                                        {...field}
                                        value={option}
                                    />
                                )}
                            />
                            <span className="ml-3">{option}</span>
                        </label>
                    </div>
                ))}

                {hasOtherAnswer && (
                    <label className="flex items-center">
                        <Controller
                            control={control}
                            name={name}
                            rules={required ? { required } : undefined}
                            render={({ field }) => (
                                <input
                                    type="radio"
                                    required={required}
                                    className="w-5 h-5"
                                    {...field}
                                    value="Other"
                                />
                            )}
                        />
                        <span className="ml-3">Other:
                            <input className="ml-5 border-b-2 w-80 focus:outline-none" type="text"/>
                        </span>
                    </label>
                )}
            </div>
        </>
    );
};

export default RadioInput;