import Question from "./Question.tsx";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string;
    team: string;
    favoriteTech: string;
    learnTech: string[];
    currentLevel: Record<string, string>;
    interest: string[];
    goals1: string,
    goals2: string,
    goals3: string,
    wantToWork: string,
    wantToSpeak: string,
    myTopic: string[],
    wantToVisit: string,
    myIdea: string
};

const Form = () => {
    const { control, handleSubmit, formState: { errors }} = useForm<Inputs>({
        defaultValues: {
            name: '',
            team: '',
            favoriteTech: '',
            learnTech: [],
            currentLevel: {},
            interest: [],
            goals1: '',
            goals2: '',
            goals3: '',
            wantToWork: '',
            wantToSpeak: '',
            myTopic: [],
            wantToVisit: '',
            myIdea: ''
        },
    });
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

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
                errors={errors.name}
            />
            <Question
                control={control}
                question="Your team"
                inputType="text"
                required
                name="team"
                errors={errors.team}
            />
            <Question
                control={control}
                question="My favorite tech (best)"
                inputType="radio"
                name="favoriteTech"
                required
                options={["Vue", "React", "Angular", "NodeJS", "SAP Fiori"]}
                errors={errors.favoriteTech}
            />
            <Question
                control={control}
                question="I want to learn tech (JS)"
                inputType="checkbox"
                required
                name="learnTech"
                options={["JS", "TS", "React", "Vue", "Angular", "NodeJS", "SAP Fiori", "React Native", "Flutter"]}
                errors={errors.learnTech}
            />
            <Question
                control={control}
                question="My current level on tech"
                inputType="radioMatrix"
                required
                name="currentLevel"
                matrixData={{
                    columns: ["Not relevant", "Trainee", "Junior", "Middle", "Senior", "Expert"],
                    rows: ["JS", "TS", "React", "Vue", "Angular", "NodeJS", "GraphQL", "Wordpress", "Drupal", "Python", "REST", "Other", "React Native", "Flutter"],
                }}
                errors={errors.currentLevel}
            />
            <Question
                control={control}
                question="I'm interested to"
                inputType="checkbox"
                required
                name="interest"
                options={["develop presentations", "develop DX8", "develop complex app", "develop hybrid react-native", "develop internal small project", "develop pet-projects", "research for frontend competence center"]}
                errors={errors.interest}
            />
            <Question
                control={control}
                question="#1 My goals on next time"
                additionalText="Let's prepare 3 goals for your and delivery future growth. You can check those goals in next 3 month. Example: want to create prject with react, redux, saga, rest in next 3month. Project should contain 10+ complex components, routing..."
                inputType="text"
                required
                name="goals1"
                errors={errors.goals1}
            />
            <Question
                control={control}
                question="#2 My goals on next time"
                inputType="text"
                required
                name="goals2"
                errors={errors.goals2}
            />
            <Question
                control={control}
                question="#3 My goals on next time"
                inputType="text"
                required
                name="goals3"
                errors={errors.goals3}
            />
            <Question
                control={control}
                question="I want to work on new PreSales. MVP, POC or new projects"
                additionalText="For future planning we want to know if it is interested for you"
                inputType="radio"
                name="wantToWork"
                required
                options={["yes", "no"]}
                errors={errors.wantToWork}
            />
            <Question
                control={control}
                question="I want to speak on FCC meetup or other meetups"
                additionalText="We want to check if we should come back internal FCC team meetups."
                inputType="radio"
                name="wantToSpeak"
                required
                options={["Yes", "No"]}
                errors={errors.wantToSpeak}
            />
            <Question
                control={control}
                question="My topic in FCC"
                additionalText="We want to check if we should come back internal FCC team meetups."
                inputType="checkbox"
                required
                name="myTopic"
                options={["Global technology overview", "Analytic and architecture topics", "Technology battle", "Anthill edetailer (internal stuff)", "Anthill DX8 (internal stuff)", "Pet projects discussions and showing"]}
                errors={errors.myTopic}
            />
            <Question
                control={control}
                question="I want to visit FCC meetup"
                inputType="radio"
                name="wantToVisit"
                required
                options={["Yes", "No"]}
                errors={errors.wantToVisit}
            />
            <Question
                control={control}
                question="My idea of how to improve our work"
                additionalText="You can propose everything that you want. Doesn't matter your delivery / team"
                inputType="text"
                name="myIdea"
            />

            <div className="flex justify-between items-center mt-5">
                <button type="submit" className="bg-orange-600 text-white px-8 py-2 rounded font-medium">Submit</button>
                <div className="flex items-center gap-4">
                    <div className="w-44 h-2 bg-green-600 rounded"/>
                    <p>Page 1 of 1</p>
                </div>
                <button type="reset" className="text-orange-600 font-medium">Reset</button>
            </div>
        </form>
    );
};

export default Form;