import EventCard from "./EventCard"

export default function EventTimeline({ events }) {
    return (
        <div>
            <h1>EventTimeline</h1>
            {events.map((event) => <EventCard event={event} />)}
        </div>
    )
}