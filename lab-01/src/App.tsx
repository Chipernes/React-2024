import TimelineEvent from "./components/TimelineEvent.tsx";
import SelectedEvent from "./components/SelectedEvent.tsx";
import {Event} from "./types/Event.ts";
import {useState} from "react";

function App() {
    const eventsData: Event[] = [
        {
            id: 1,
            imgName: "01.jpg",
            date: "988 р.",
            text: "Початок запровадження князем Володимиром християнства як державної релігії Київської Русі"
        },
        {
            id: 2,
            imgName: "02.jpg",
            date: "1108 р.",
            text: "Заснування онуком Ярослава Мудрого Святополком Михайлівського Золотоверхого монастиря в Києві"
        },
        {
            id: 3,
            imgName: "03.jpg",
            date: "1508 р.",
            text: "Повстання Михайла Глинського"
        },
        {
            id: 4,
            imgName: "04.jpg",
            date: "1596 р.",
            text: "Берестейська церковна унія"
        },
        {
            id: 5,
            imgName: "05.jpg",
            date: "5 грудня 1653 р.",
            text: "Жванецька облога"
        },
        {
            id: 6,
            imgName: "06.jpg",
            date: "1775 р.",
            text: "Заснування запорожцями, які переселилася до турецьких володінь, Задунайської Січі."
        },
    ];

    const [currentSelection, setCurrentSelection] = useState<Event | null>(null);

    const handleSelectEvent = (event: Event) => {
        setCurrentSelection(event);
    };

    return (
        <>
            <div className="max-w-[1000px] mx-auto mt-5 bg-teal-200 rounded p-5 flex items-center flex-col gap-5">
                {currentSelection &&
                  <SelectedEvent
                    id={currentSelection.id}
                    imgName={currentSelection.imgName}
                    date={currentSelection.date}
                    text={currentSelection.text}
                  />
                }

                <div className="flex flex-wrap gap-6 justify-center cursor-pointer">
                    {eventsData.map((event: Event) => (
                        <TimelineEvent
                            onClick={() => handleSelectEvent(event)}
                            key={event.id}
                            id={event.id}
                            imgName={event.imgName}
                            date={event.date}
                            text={event.text}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;