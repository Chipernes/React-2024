import { FC, ChangeEvent, useState } from "react";
import { Controller } from "react-hook-form";

type CheckboxInputProps = {
    options?: string[];
    hasOtherAnswer?: boolean;
    required?: boolean;
    control: any;
    name: string;
};

const CheckboxInput: FC<CheckboxInputProps> = ({ options = [], hasOtherAnswer, required, control, name }) => {
    const [otherText, setOtherText] = useState("");

    const handleOtherTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        setOtherText(e.target.value);
    };

    return (
        <div className="accent-red-500 mt-5">
            {options.map((option, index) => (
                <div key={index} className="mt-2">
                    <label className="flex items-center">
                        <Controller
                            control={control}
                            name={name}
                            rules={required ? { required: true } : undefined}
                            render={({ field }) => (
                                <input
                                    type="checkbox"
                                    checked={field.value?.includes(option) || false}
                                    onChange={(e) => {
                                        const valueArray = [...(field.value || [])];
                                        if (e.target.checked) {
                                            valueArray.push(option);
                                        } else {
                                            const index = valueArray.indexOf(option);
                                            if (index > -1) valueArray.splice(index, 1);
                                        }
                                        field.onChange(valueArray);
                                    }}
                                    className="w-5 h-5"
                                />
                            )}
                        />
                        <span className="ml-3">{option}</span>
                    </label>
                </div>
            ))}

            {hasOtherAnswer && (
                <div className="mt-2">
                    <label className="flex items-center">
                        <Controller
                            control={control}
                            name={name}
                            render={({ field }) => (
                                <>
                                    <input
                                        type="checkbox"
                                        checked={field.value?.includes(otherText) || false}
                                        onChange={(e) => {
                                            const valueArray = [...(field.value || [])];
                                            if (e.target.checked && otherText) {
                                                valueArray.push(otherText);
                                            } else {
                                                const index = valueArray.indexOf(otherText);
                                                if (index > -1) valueArray.splice(index, 1);
                                            }
                                            field.onChange(valueArray);
                                        }}
                                        className="w-5 h-5"
                                    />
                                    <span className="ml-3">Other:</span>
                                    <input
                                        type="text"
                                        value={otherText}
                                        onChange={(e) => {
                                            handleOtherTextChange(e);
                                            const valueArray = [...(field.value || [])];
                                            if (valueArray.includes(otherText)) {
                                                valueArray[valueArray.indexOf(otherText)] = e.target.value;
                                            }
                                            field.onChange(valueArray);
                                        }}
                                        className="ml-3 border-b-2 w-80 focus:outline-none"
                                    />
                                </>
                            )}
                        />
                    </label>
                </div>
            )}
        </div>
    );
};

export default CheckboxInput;
