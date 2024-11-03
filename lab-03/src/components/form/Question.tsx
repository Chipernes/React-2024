import {ChangeEvent, FC, FocusEvent, useState} from "react";
import classNames from "classnames";
import RadioInput from "./RadioInput.tsx";
import TextInput from "./TextInput.tsx";
import CheckboxInput from "./CheckboxInput.tsx";

type FormQuestionProps = {
    question: string,
    inputType: 'text' | 'radio' | 'checkbox',
    options?: string[],
    required?: boolean
    control: any,
    name: string
};

const Question: FC<FormQuestionProps> = ({ name, required, control, question, inputType, options}) => {
    const [hasError, setHasError] = useState(false);

    const questionClasses = classNames(
        "bg-white rounded-lg px-5 py-8 mt-5",
        { "border border-red-500": hasError }
    );

    const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
        if (!event.target.value && required) {
            setHasError(true);
        } else {
            setHasError(false);
        }
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value) {
            setHasError(false);
        }
    };

    return (
        <div className={questionClasses}>
            <p>
                {question}
                {<span className="text-red-500"> *</span>}
            </p>
            {inputType === 'text' && (
                <div className="mt-6">
                    <TextInput name={name} control={control} handleBlur={handleBlur} handleInputChange={handleInputChange} required={required}/>
                </div>
            )}

            {inputType === 'radio' && <RadioInput control={control} name={name} options={options} required={required} hasOtherAnswer/>}

            {inputType === 'checkbox' && <CheckboxInput control={control} name={name} options={options} hasOtherAnswer required={required} />}

            {hasError &&  <p className="text-red-500 mt-3">The answer to this question is required</p>}
        </div>
    );
};

export default Question;