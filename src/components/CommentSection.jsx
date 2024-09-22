import { useEffect, useState } from 'react';
import CommentCard from './CommentCard';

const initComments = [
    {
        "EventReplies": [
            {
                "content": "I agree",
                "event_id": 2,
                "id": 1
            },
            {
                "content": "100% agree",
                "event_id": 2,
                "id": 2
            }
        ],
        "content": "This is amazing!",
        "event_id": 2,
        "id": 6
    },
    {
        "EventReplies": [
            {
                "content": "100% agree",
                "event_id": 2,
                "id": 2
            }
        ],
        "content": "Very cool!",
        "event_id": 2,
        "id": 7
    },
    {
        "EventReplies": [
            {
                "content": "Wow",
                "event_id": 2,
                "id": 3
            }
        ],
        "content": "wow",
        "event_id": 2,
        "id": 8
    },
]

export default function CommentSection(eventId) {

    const [comments, setComments] = useState(initComments);

    useEffect(() => {
        fetchComments(eventId).then((data) => {
            setComments(data);
        });
    }, [eventId]);

    return (
        <section className="">
            <div className="flex flex-col gap-11 w-full">
                {comments.map((comment,index,{length}) => (<>
                     <div className=' border-b w-full'></div>
                    <CommentCard key={comment.id} comment={comment} />
                </>
                ))}
            </div>
        </section>
    );
}
async function fetchComments(eventId) {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };
    console.log(eventId)

    const res = await fetch(`https://PranilIngle.pythonanywhere.com/comments/${eventId}`, requestOptions)
    const data = await res.json()

    // console.log(data)

    return data;
}