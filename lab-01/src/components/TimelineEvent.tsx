import {Event} from "../types/Event.ts";
import {FC} from "react";

interface Props extends  Event{
    onClick: () => void;
}

const TimelineEvent: FC<Props> = ({imgName, date, text, onClick}) => {
    const imagePath = `/events/${imgName}`;
    return (
        <div
            className="max-w-[300px] inline-block border-2 border-slate-600 rounded p-2"
            onClick={onClick}
        >
            <img className="rounded aspect-video object-cover max-h-[200px] h-[160px]" src={imagePath} alt={imgName}/>
            <h2 className="text-2xl font-bold mt-3">Дата: {date}</h2>
            <p className="mt-1">{text}</p>
        </div>
    );
}

export default TimelineEvent;