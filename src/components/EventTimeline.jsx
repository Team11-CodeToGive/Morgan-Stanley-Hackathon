import EventCard from "./EventCard"

export default function EventTimeline({ events }) {
    return (
        <div className="mx-auto w-1/2">
            {events.map((event,key) => <EventCard key={key} event={event} />)}
        </div>
    )
}