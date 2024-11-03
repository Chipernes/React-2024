import Question from "./Question.tsx";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string;
    team: string;
    favoriteTech: string;
    learnTech: string[];
    currentLevel: string[];
};

const Form = () => {
    const { getValues, control, handleSubmit } = useForm<Inputs>({
        defaultValues: {
            name: '',
            team: '',
            favoriteTech: '',
            learnTech: [],
        },
    });
    const onSubmit: SubmitHandler<Inputs> = data => {
        const values = getValues();
        console.log(values)
        console.log(data)
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
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
                control={control}
                question="Name, Surname"
                inputType="text"
                required
                name="name"
            />
            <Question
                control={control}
                question="Your team"
                inputType="text"
                required
                name="team"
            />
            <Question
                control={control}
                question="My favorite tech (best)"
                inputType="radio"
                name="favoriteTech"
                required
                options={["Vue", "React", "Angular", "NodeJS", "SAP Fiori"]}
            />
            <Question
                control={control}
                question="I want to learn tech (JS)"
                inputType="checkbox"
                required
                name="learnTech"
                options={["JS", "TS", "React", "Vue", "Angular", "NodeJS", "SAP Fiori", "React Native", "Flutter"]}
            />
            <Question
                control={control}
                question="My current level on tech"
                inputType="radioMatrix"
                required
                name="currentLevel"
                matrixData={{
                    columns: ["Not relevant", "Trainee", "Junior", "Middle", "Senior", "Expert"],
                    rows: ["JS", "TS", "React", "Vue", "Angular", "NodeJS", "GraphQL", "Wordpress, Drupal", "Python", "REST", "Other", "React Native", "Flutter"],
                }}
            />

            <input type="submit" />
        </form>
    );
};

export default Form;