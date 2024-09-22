import { Bookmark, Share, } from "lucide-react"
import { navigate } from 'astro:transitions/client';
import { toUserFriendlyTimeFormat } from '../utils/dateUtils';

export default function EventCard({ event }) {
    return (
        <div className="cursor-pointer rounded relative
        duration-200 hover:shadow-[0_0_0_0.75rem_rgba(0_0_0_/_5%)] hover:bg-[rgb(0_0_0_/_5%)]
        focus-within:shadow-[0_0_0_0.75rem_rgba(0_0_0_/_5%)] focus-within:bg-[rgb(0_0_0_/_5%)]"
        >
            <div className="flex gap-4 ">
                <span className="flex-col">
                    {/* <p>{event.thumbnail}</p> */}
                    <div className="h-20 w-36 rounded bg-gray-200"></div>
                </span>
                <span className="flex-col flex gap-1 py-1">
                    {/* <div className="text-sm">{event.startDateTime} - {event.endDateTime} </div> */}
                    
                    <div className="text-sm">{toUserFriendlyTimeFormat(event.start_datetime)} EST </div>
                    <h4 className=" text-base font-semibold">
                        {/* I couldn't come up with this even if I tried. 
                        It is the pseudo-content trick: https://inclusive-components.design/cards/ */}
                        <a class="after:absolute after:inset-0 focus:outline-none" href="/event-details">
                        {event.title}
                        </a>
                    </h4>
                    <div className="text-sm">{event.location.name}, {event.location.address}</div>
                </span>

            </div>
            <span className="flex gap-4 mt-4 ">
                <span className="flex gap-4">
                    <p className=" w-36 "></p>
                </span>
                <span className="flex w-full gap-3">
                    <span className="flex me-auto text-sm text-gray-500 items-center">
                        <p className="me-5">{event.attendees?.length || 0}  / {event.capacity} Attendees: </p>
                        {event.attendees && event.attendees.map((attendee, key) => <div className="flex -ml-3 shadow outline outline-2 items-center justify-center font-mono rounded-full bg-accent text-gray-100 w-7 h-7" key={key}><div>{attendee[0]}</div></div>)}
                    </span>
                    <button className=" bg-white p-2 outline outline-gray-100 rounded-full hover:shadow-lg transition duration-100">{<Share />}</button>
                    <button className="  bg-white p-2 outline outline-gray-100 rounded-full hover:shadow-lg transition duration-200">{<Bookmark />}</button>
                </span>
            </span>
        </div>
    )
}
