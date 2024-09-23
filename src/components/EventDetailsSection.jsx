import { useEffect, useState } from "react";
import { toUserFriendlyDateFormat, toUserFriendlyTimeFormat } from "@/utils/dateUtils";

const EventDetailsSection = ({ eventId }) => {
    const [eventData, setEventData] = useState(null);

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

    if (!eventData) return (
        <div>
            <h2 className="font-semibold text-xl w-full text-gray-700">Details</h2>
            <p className="text-sm text-gray-400">Loading...</p>
        </div>
    );

    const { title, location, start_datetime, description } = eventData;

    // Extract meeting times
    const meetingTimes = [
        {
            day: new Date(start_datetime).toLocaleDateString('en-US', { weekday: 'long' }),
            date: new Date(start_datetime).toLocaleDateString(),
            time: new Date(start_datetime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
    ];

    return (
        <div className="flex flex-col gap-4">
            <header className="pt-5">
                <h1 className="text-3xl font-semibold text-gray-700">{title}</h1>
                <p className="text-sm text-gray-400 mt-2">{location.name}, {location.address}</p>
            </header>
            {/* Meeting Dates */}
            <section className="flex flex-wrap w-full gap-2">
                {meetingTimes.map((meetingTime, index) => (
                    <p key={index} className="bg-gray-100 w-fit px-6 py-2 rounded-full text-md text-purple-500 font-semibold">
                        {meetingTime.day} {toUserFriendlyDateFormat(start_datetime)} @ {meetingTime.time}
                    </p>
                ))}
            </section>
            <h2 className="font-semibold text-xl w-full text-gray-700">Description</h2>
            <p className="text-sm text-gray-400">{description}</p>

            {/* Mobile View for Meeting Details */}
            <div className="md:hidden">
                <br />
                <p className="text-sm text-gray-400">
                    {meetingTimes[0].day}, {meetingTimes[0].date}
                </p>
                <p className="text-sm text-gray-400">{meetingTimes[0].time}</p>
            </div>
        </div>
    );
};

export default EventDetailsSection;
