import  { useEffect, useState } from 'react';

const EventImages = ({ eventId }) => {
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

    if (!eventData) return <div className='w-full h-[500px] bg-gray-200'></div>;

    const { title, location, attendees, image_url } = eventData;

    // Extract host name safely
    const hostName = attendees[0]?.user_info.name || "Unknown";

    return (
        <div className="grid w-full h-full md:grid-cols-[minmax(300px,300px)_1fr]">
            <img
                src={image_url || "/placeHolderImages/coffeeClubPlaceHolder.jpg"} // Use event image or placeholder
                alt="Event Thumbnail"
                className="object-cover col-[1/-1] row-[1/2]"
            />
            <div className="flex w-fit pr-4 pl-1 py-1 mb-2 ml-2 gap-2 rounded-full bg-white col-[1/2] row-[1/2] self-end">
                <div className="w-14 h-14 rounded-full bg-gray-200"></div>
                <div className="flex flex-col text-sm my-auto">
                    <p className="font-semibold text-gray-700 text-xs">Hosted by</p>
                    <p className="text-gray-400">{hostName}</p>
                </div>
            </div>
        </div>
    );
};

export default EventImages;
