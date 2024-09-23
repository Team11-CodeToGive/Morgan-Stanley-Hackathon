import React, { useEffect, useState } from 'react';

const EventPeopleSection = ({ eventId }) => {
    const [eventData, setEventData] = useState(null);
    const [carpoolers, setCarpoolers] = useState([]);

    useEffect(() => {
        async function fetchEventData() {
            try {
                const response = await fetch(`https://my-project-1547014036843.uc.r.appspot.com/event/${eventId}`);
                const data = await response.json();
                setEventData(data);

                // Assume carpoolers are part of the event data. Modify if needed.
                // For this example, I'm creating a placeholder for carpoolers.
                const placeholderCarpoolers = [
                    { name: "Alice" },
                    { name: "Bob" },
                    { name: "Charlie" }
                ];
                setCarpoolers(placeholderCarpoolers);
            } catch (error) {
                console.error("Error fetching event data:", error);
            }
        }
        fetchEventData();
    }, [eventId]);

    if (!eventData) return <div>Loading...</div>;

    const { attendees } = eventData;

    return (
        <div className='grid gap-12 flex-wrap'>
            {/* Attendees Section */}
            <section>
                <h2 className="font-semibold text-xl mb-5 text-gray-700">
                    Attendees ({attendees.length})
                </h2>
                <div className="flex flex-wrap gap-4">
                    {attendees.map((attendee, index) => (
                        <div key={index} className="flex w-fit pr-8 pl-2 py-2 gap-4 rounded-full shadow-sm bg-white">
                            <div className="w-14 h-14 rounded-full bg-gray-200"></div>
                            <div className="flex flex-col text-sm my-auto">
                                <p className="font-semibold text-gray-700">{attendee.user_info.name}</p>
                                <p className="text-gray-400">{attendee.user_info.role || 'Participant'}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Organizers Button */}
            <button className="bg-orange-400 w-fit px-5 py-3 rounded-full text-white text-sm">
                Contact organizers
            </button>

            {/* Need A Ride Section */}
            <section>
                <h2 className="font-semibold text-xl pb-3 text-gray-700">
                    Need a ride? Contact who's carpooling
                </h2>
                <div className="flex flex-wrap gap-x-16 gap-y-4 content-center">
                    {carpoolers.map((carpooler, index) => (
                        <div key={index} className="flex gap-3 items-center">
                            <div className="w-5 h-5 rounded-full bg-black"></div>
                            <p className="text-gray-700">{carpooler.name}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default EventPeopleSection;
