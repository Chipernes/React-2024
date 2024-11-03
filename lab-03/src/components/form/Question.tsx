import {ChangeEvent, FC, FocusEvent, useState} from "react";
import classNames from "classnames";
import RadioInput from "./RadioInput.tsx";
import TextInput from "./TextInput.tsx";

type FormQuestionProps = {
    question: string,
    inputType: 'text' | 'radio' | 'checkbox',
    required?: boolean,
    options?: string[]
};

const Question: FC<FormQuestionProps> = ({question, inputType , required, options}) => {
    const [hasError, setHasError] = useState(false);

    const questionClasses = classNames(
        "bg-white rounded-lg px-5 py-8 mt-5",
        { "border border-red-500": hasError }
    );

    const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
        if (!event.target.value && required) {
            setHasError(true);
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
                {required && <span className="text-red-500"> *</span>}
            </p>
            {inputType === 'text' && (
                <div className="mt-6">
                    <TextInput handleBlur={handleBlur} handleInputChange={handleInputChange} required/>
                </div>
            )}

            {inputType === 'radio' && <RadioInput options={options} otherAnswer required handleBlur={handleBlur} handleInputChange={handleInputChange}/>}

            {hasError &&  <p className="text-red-500 mt-3">The answer to this question is required</p>}
        </div>
    );
};

export default Question;