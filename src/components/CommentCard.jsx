export default function CommentCard({ comment }) {
    return (
        <div className="flex flex-col gap-4 w-full">
            <div className="flex gap-6">
                {/* Placeholder for user avatar */}
                <div className="w-14 h-14 rounded-full bg-black"></div>
                <div>
                    {/* User name and date (you might want to include these fields in your data structure) */}
                    <h4 className="font-semibold text-gray-700">Username</h4>
                    <p className="text-gray-400 text-sm">2024-10-05</p>
                </div>
            </div>
            {/* Comment content */}
            <p className="text-gray-400 text-sm mt-2">{comment.content}</p>

            {/* Replies section */}
            <div className="ml-6">
                {comment.EventReplies.map((reply, index) => (
                    <div key={index} className="mt-2 pl-4 border-l-2">
                        <p className="text-gray-400 text-sm">{reply.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
