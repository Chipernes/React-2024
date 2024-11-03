import {FC, useState, FocusEvent, ChangeEvent} from "react";
import classNames from "classnames";

interface FormQuestionProps {
    question: string;
    inputType: string;
    required?: boolean;
}

const Question: FC<FormQuestionProps> = ({question, required}) => {
    const [hasError, setHasError] = useState(false);

    const inputClasses = classNames(
        "mt-6 border-b-2 p-2 w-80 focus:outline-none",
        { "focus:border-red-500": required }
    );

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

            <input
                type="text"
                placeholder="Your answer"
                className={inputClasses}
                onBlur={handleBlur}
                onChange={handleInputChange}
            />
            {hasError &&  <p className="text-red-500 mt-3">The answer to this question is required</p>}
        </div>
    );
};

export default Question;