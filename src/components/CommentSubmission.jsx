import { useState } from 'react';

export default function CommentSubmission({ eventId }) {
    const [comment, setComment] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Function to handle the comment submission
    const submitComment = async (e) => {
        e.preventDefault();

        // Reset any previous messages
        setErrorMessage('');
        setSuccessMessage('');
        setIsSubmitting(true);

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                content: comment,
                event_id: eventId,
            }),
        };

        try {
            const response = await fetch('https://my-project-1547014036843.uc.r.appspot.com/comments/createComment', requestOptions);

            if (response.ok) {
                setSuccessMessage('Comment submitted successfully!');
                setComment('');  // Reset the input after submission
            } else {
                const data = await response.json();
                setErrorMessage(data.message || 'Error submitting the comment.');
            }
        } catch (error) {
            setErrorMessage('An error occurred while submitting the comment.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full mx-auto">
            <form onSubmit={submitComment} className="flex flex-col gap-4">
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write your comment here..."
                    className="p-2 border rounded-lg w-full"
                    rows={4}
                    required
                />
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                {successMessage && <p className="text-green-500">{successMessage}</p>}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-accent text-white p-2 rounded-lg disabled:bg-gray-400"
                >
                    {isSubmitting ? 'Submitting...' : 'Submit Comment'}
                </button>
            </form>
        </div>
    );
}
