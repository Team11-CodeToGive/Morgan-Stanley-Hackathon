export default function EventCard({ event }) {
    return (
        <div className="bg-white border-gray-200 border shadow-sm p-5 ">
            <div className="flex gap-4 ">
                <span className="flex-col">
                    {/* <p>{event.thumbnail}</p> */}
                    <p className="h-24 w-32  bg-gray-200"></p>
                </span>
                <span className="flex-col flex gap-1 py-1">
                    <p className="text-sm">{event.startDateTime} - {event.endDateTime} </p>
                    <h1>{event.title}</h1>
                    <p className="text-sm">{event.location}</p>
                </span>

            </div>
            <span className="flex gap-4 ">
                <span className="flex gap-4">
                    <p className=" w-32 "></p>
                </span>
                <span className="flex w-full gap-1">
                    <span className="flex gap-1 me-auto">
                        <p>{event.attendees?.length || 0} Attendees: </p>
                        {event.attendees && event.attendees.map((attendee, key) => <div className=" rounded-full bg-gray-200 w-6 h-6 text-center align-middle" key={key}>{attendee[0]}</div>)}
                    </span>
                    <div className="bg-blue-200 px-1 rounded shadow">bookMark</div>
                    <div className="bg-blue-200 px-1 rounded shadow">share</div>
                </span>
            </span>
        </div>
    )
}