import {Event} from "../types/Event.ts";
import {FC} from "react";

const SelectedEvent: FC<Event> = ({imgName, date, text}) => {
    const imagePath = `/events/${imgName}`;
    return (
        <div
            className="w-[400px] inline-block border-2 border-slate-600 rounded p-2"
        >
            <h2 className="text-3xl font-bold mt-3 text-center">Ваша вибрана подія:</h2>
            <img className="w-full rounded aspect-video object-cover max-h-[200px] h-[160px] mt-3" src={imagePath} alt={imgName}/>
            <h2 className="text-2xl font-bold mt-3">Дата: {date}</h2>
            <p className="mt-1">{text}</p>
        </div>
    );
}

export default SelectedEvent;