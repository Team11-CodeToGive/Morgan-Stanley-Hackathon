import EventCard from "./EventCard"

export default function EventTimeline({ days }) {
    return (
        <div className=" gap-4 grid w-full">
            {
                days.map((day, key) =>
                    <div className key={key}>
                        <h2 className="text-2xl font-semibold pb-4">{day.date}</h2>
                        <div className="border-b border-1 border-gray-300 mb-4"></div>
                        <div className="gap-4 grid">
                            {day.events.map((event, key, { length }) => (
                                <>
                                    <EventCard key={key} event={event}></EventCard>
                                    {key + 1 != length && <div className="border-b border-1 border-gray-100"></div>}
                                </>
                            ))}
                        </div>
                    </div>)
            }
        </div>
    )
}