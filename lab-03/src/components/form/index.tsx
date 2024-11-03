import Question from "./Question.tsx";

const Form = () => {
    return (
        <form
            noValidate
            className="max-w-[650px] m-auto py-5"
        >
            <div className="bg-white border-t-[10px] border-[#ff9800] rounded-lg p-5">
                <h1 className="text-4xl ">Tech skills / Activity</h1>
                <hr className="w-100 h-[1px] bg-[#dadce0] my-3"/>
                <p className="text-gray-600 font-bold">vt222_mnv@student.ztu.edu.ua</p>
                <hr className="w-100 h-[1px] bg-[#dadce0] my-3"/>
                <p className="text-red-600">An asterisk (*) indicates that the question is required</p>
            </div>

            <Question
                question={"Name, Surname"}
                inputType="text"
                required
            />
            <Question
                question={"Your team"}
                inputType="text"
                required
            />
        </form>
    );
};

export default Form;