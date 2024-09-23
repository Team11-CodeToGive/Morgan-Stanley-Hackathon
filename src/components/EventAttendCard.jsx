import { useState, useEffect } from "react";

const AttendCard = ({ eventId }) => {
    const [eventData, setEventData] = useState(null);
    const [isAttending, setIsAttending] = useState(false);
    const [addedToCalendar, setAddedToCalendar] = useState(false);

    useEffect(() => {
        async function fetchEventData() {
            try {
                const response = await fetch(`https://PranilIngle.pythonanywhere.com/event/${eventId}`);
                const data = await response.json();
                setEventData(data);
            } catch (error) {
                console.error("Error fetching event data:", error);
            }
        }
        fetchEventData();
    }, [eventId]);

    const handleAttendance = () => {
        setIsAttending((prev) => !prev);
        if (addedToCalendar) {
            setAddedToCalendar(false);
        }
    };

    const handleAddToCalendar = () => {
        setAddedToCalendar((prev) => !prev);
        if (!addedToCalendar) {
            setIsAttending(true);
        }
    };

    if (!eventData) return <div>
        <div className="md:flex md:flex-col hidden">
        <article className="sticky top-5 w-full bg-white rounded-md shadow-sm">
            <div className="p-5">
                <h2 className="font-semibold text-xl text-gray-700">Loading... </h2>
                <hr className="my-2" />
                <p className="text-sm text-gray-400"> </p>
                <p className="text-sm text-gray-400"> </p>
                <p className="text-sm text-gray-400"> </p>
            </div>
            <img
                src="/placeHolderImages/mapPlaceholder.png"
                alt="descriptive text"
                width="100%"
                height="100%"
                className="object-cover"
            />
            <div className="px-5 pt-5">
                <button
                    className={isAttending
                        ? "w-full p-3 text-sm rounded-full text-white bg-purple-800"
                        : "w-full p-3 text-sm rounded-full text-white bg-purple-500"}
                    onClick={handleAttendance}
                >
                    {isAttending ? "Attending" : "Attend"}
                </button>
            </div>
            <div className="p-5">
                <button
                    className={addedToCalendar
                        ? "w-full p-3 text-sm rounded-full text-white bg-orange-800"
                        : "w-full p-3 text-sm rounded-full text-white bg-orange-500"}
                    onClick={handleAddToCalendar}
                >
                    {addedToCalendar ? "Added to Calendar" : "Add to Calendar"}
                </button>
            </div>
        </article>
    </div></div>;

    const { title, location, start_datetime, end_datetime } = eventData;
    const meetingTimes = [
        { day: new Date(start_datetime).toLocaleDateString('en-US', { weekday: 'long' }), date: new Date(start_datetime).toLocaleDateString(), time: new Date(start_datetime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
    ];

    return (
        <div className="md:flex md:flex-col hidden">
            <article className="sticky top-5 w-full bg-white rounded-md shadow-sm">
                <div className="p-5">
                    <h2 className="font-semibold text-xl text-gray-700">{title}</h2>
                    <hr className="my-2" />
                    <p className="text-sm text-gray-400">{meetingTimes[0].day}, {meetingTimes[0].date}</p>
                    <p className="text-sm text-gray-400">{meetingTimes[0].time}</p>
                    <p className="text-sm text-gray-400">{location.name}, {location.address}</p>
                </div>
                <img
                    src="/placeHolderImages/mapPlaceholder.png"
                    alt="descriptive text"
                    width="100%"
                    height="100%"
                    className="object-cover"
                />
                <div className="px-5 pt-5">
                    <button
                        className={isAttending
                            ? "w-full p-3 text-sm rounded-full text-white bg-purple-800"
                            : "w-full p-3 text-sm rounded-full text-white bg-purple-500"}
                        onClick={handleAttendance}
                    >
                        {isAttending ? "Attending" : "Attend"}
                    </button>
                </div>
                <div className="p-5">
                    <button
                        className={addedToCalendar
                            ? "w-full p-3 text-sm rounded-full text-white bg-orange-800"
                            : "w-full p-3 text-sm rounded-full text-white bg-orange-500"}
                        onClick={handleAddToCalendar}
                    >
                        {addedToCalendar ? "Added to Calendar" : "Add to Calendar"}
                    </button>
                </div>
            </article>
        </div>
    );
}

export default AttendCard;