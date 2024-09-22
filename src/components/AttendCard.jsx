import { useState } from "react";

const AttendCard = ({eventName, eventLocation, meetingTimes}) => {
    
    // will have to get from API
    const [isAttending, setIsAttending] = useState(false)
    const handleAttendance = () => {   
        if (isAttending) {
            setIsAttending(false);
            setAddedToCalendar(false);
        }
        else {
            setIsAttending(true);
        }
    }

    // will have to get from API
    const [addedToCalender, setAddedToCalendar] = useState(false);
    const handleAddToCalendar = ()=> {
        if (addedToCalender){
            setAddedToCalendar(false);
        }
        else {
            setAddedToCalendar(true);
            setIsAttending(true);
        }
    }
    
    return (
        <>
            <div className="md:flex md:flex-col hidden">
                {/* add to calendar + address = map */}
                <article className="sticky top-5 w-full bg-white rounded-md shadow-sm">
                    <div className="p-5">
                        <h2 className="font-semibold text-xl text-gray-700"> {eventName} </h2>
                        <hr className="my-2"/>
                        <p className="text-sm text-gray-400">{meetingTimes[0].day}, {meetingTimes[0].date}</p>
                        <p className="text-sm text-gray-400">{meetingTimes[0].time}</p>
                        <p className="text-sm text-gray-400">{eventLocation}</p>
                    </div>
                    <img
                    src="/placeHolderImages/mapPlaceholder.png"
                    alt="descriptive text"
                    width="100%"
                    height="100%"
                    className="object-cover "
                    />
                    <div className="px-5 pt-5">
                        <button className={
                        isAttending 
                        ? "w-full p-3 text-sm rounded-full text-white bg-purple-800" 
                        :"w-full p-3 text-sm rounded-full text-white bg-purple-500"} 
                        onClick={handleAttendance}> 
                            {isAttending? "Attending": "Attend"}
                        </button>
                    </div>
                    <div className="p-5">
                        <button className={
                        addedToCalender 
                        ? "w-full p-3 text-sm rounded-full text-white bg-orange-800" 
                        : "w-full p-3 text-sm rounded-full text-white bg-orange-500"} 
                        onClick={handleAddToCalendar}> 
                            {addedToCalender? "Added to Calender": "Add to Calendar"}
                        </button>
                    </div>
                </article>
            </div>
        </>
    )
}

export default AttendCard;