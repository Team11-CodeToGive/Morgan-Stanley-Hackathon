import { Bookmark, BookMarkedIcon, BookmarkIcon, BookmarkMinus, BookmarkPlus, BookmarkX, LucideBookmark, Share } from "lucide-react"
import { navigate } from 'astro:transitions/client';
import { toUserFriendlyTimeFormat } from '../utils/dateUtils';
import { useState } from "react";

export default function EventCard({ event }) {
    const eventId = event.event_id;
    const eventIdPath = `/events/${eventId}`;

    const [bookmarked, setBookmarked] = useState(true);

    async function handleToggleBookmark() {
        setBookmarked(!bookmarked);
        console.log(bookmarked)
        // const status = await toggleBookmark(eventId)
        // setBookmarked(await status);
    }

    return (
        <div className="px-1 cursor-pointer rounded-sm relative
        duration-200 hover:shadow-[0_0_0_0.75rem_rgba(0_0_0_/_3%)] hover:bg-[rgb(0_0_0_/_3%)]
        focus-within:shadow-[0_0_0_0.75rem_rgba(0_0_0_/_2%)] focus-within:bg-[hsla(0,0%,0%,0)]"
        >
            <div className="flex gap-4  ">
                <span className="flex-col">
                    {/* <p>{event.thumbnail}</p> */}
                    <div className="h-20 w-36 rounded bg-gray-200"></div>
                </span>
                <span className="flex-col flex gap-1 py-1">
                    <div className="text-sm">{toUserFriendlyTimeFormat(event.start_datetime)} EST </div>
                    <h4 className=" text-base font-semibold">
                        {/* I couldn't come up with this even if I tried.
                        It is the pseudo-content trick: https://inclusive-components.design/cards/ */}
                        <a className="after:absolute after:inset-0 focus:outline-none" href={eventIdPath}>
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
                        {event.attendees && event.attendees.map((attendee, key) => <div className="flex -ml-3 shadow outline outline-2 items-center justify-center font-mono rounded-full bg-accent text-gray-100 w-7 h-7" key={key}><div>{attendee.user_info.name[0]}</div></div>)}
                    </span>
                    <button className={"bg-white z-10 p-2 outline outline-gray-100 rounded-full hover:shadow-lg transition duration-100"}>{<Share />}</button>
                    <button onClick={() => handleToggleBookmark()} className={!bookmarked ? "z-10  bg-white p-2 outline outline-gray-100 rounded-full hover:shadow-lg transition duration-200" : "z-10  bg-accent text-white p-2 outline outline-gray-100 rounded-full hover:shadow-lg transition duration-200"}>{bookmarked ? <BookmarkMinus /> : <BookmarkPlus />}</button>
                </span>
            </span>
        </div>
    )
}

function toggleBookmark() {
    return;

}
