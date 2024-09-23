import React, { useState } from 'react';
import FormInputField from './FormInputField';
import SearchableDropdown from './SearchableDropdown';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EventForm = ({ onClose }) => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        tags: '',
        description: '',
        start_datetime: new Date(), // Default to current date and time
        end_datetime: new Date(),   // Default to current date and time
        capacity: '',
        location: {
            address: '',
            zipcode: '',
            name: '',
        },
        community: null,
        imgFile: null, // For image upload
    });

    const communities = [
        {
            "community_id": 11,
            "created_at": "2024-09-23T04:23:54.497977+00:00",
            "description": "A community-based chess club that travels to different locations to play. Our mission is to inspire more people to play chess over the board, whether they've played for years or have never played before. Weekly OTB (Over the board) games, socials and special events!\n\nExplore: Our chess club is all about exploring new places, new opponents, and new strategies. We believe that by venturing out and trying new things, we’ll continue to grow and improve as people and players.\n\nPlay: Chess is a game of strategy and skill, and we believe in playing to win. Playing to your strengths can not only improve your skills in game but also in life.\n\nLive: For us, chess is more than just a game - it's a lifestyle. By embracing the lessons and values of the game, we strive to live our lives with integrity, focus, and determination.\n\nLearn more about us:\nhttps://www.chess.com/join/traveling-chess-club\nhttps://www.instagram.com/travelingchessclub/\nhttps://linktr.ee/travelingchess\n\nPlease note that Chess.com is not responsible for the organization, management, or conduct of any events or groups listed on Meetup including those under the Chess.com name. These events and groups are independently organized and managed by third parties. Chess.com does not control, supervise, or endorse any activities, actions, or statements made by event organizers or participants. Participation in these events and groups is entirely at the responsibility of the participant. Chess.com disclaims all liability for any injuries, damages, or losses that may occur during or as a result of participation in these events or groups, whether they are held in person, online, or at any specific venue.\n\nBecome a member of Chess.com Global Chess Community to connect with other chess enthusiasts all around the world. 1. Learn how to play chess; 2. Play games and tournaments online; 3. Get better at chess. 4. Attend in-person and online events, including exclusive watch parties and live chess events online. We have free and premium content, for players of all skill levels, from absolute beginner to master. \nHelp us build a great global chess community!",
            "logo": "https://lxnzcyuzjvmdlgizhwwq.supabase.co/storage/v1/object/public/event-images/chess.webp?t=2024-09-23T04%3A28%3A27.477Z",
            "members": null,
            "name": "Traveling Chess in Atlanta",
            "owner_id": 47
        },
        {
            "community_id": 12,
            "created_at": "2024-09-23T04:28:09.383142+00:00",
            "description": "Welcome to the Central Texas Fly Fishing Community! This group is dedicated to bringing together fly anglers of all levels to share their passion for fly fishing. Whether you’re a seasoned pro or just starting out, we welcome you to join us.\nOur goal is to build a friendly and welcoming community where individuals can build their angler network for times when they don’t want to fish alone. We offer a variety of events and activities to help you improve your skills and connect with other fly anglers. Our events include beginner classes, casting practice evenings, Workshops on the Water, fishing excursions throughout Central Texas to get on the water, virtual fly-tying nights, various speaking events, camping weekends and even trips out of state.\nJoin us for our next event and meet other fly anglers who share your passion for fly fishing!",
            "logo": "https://lxnzcyuzjvmdlgizhwwq.supabase.co/storage/v1/object/public/event-images/trek.webp?t=2024-09-23T04%3A32%3A53.466Z",
            "members": null,
            "name": "Fly Fishing Adventure Group",
            "owner_id": 48
        },
        {
            "community_id": 13,
            "created_at": "2024-09-23T04:30:22.399842+00:00",
            "description": "Welcome to The Reading Circle Book Club! This group is for book enthusiasts who love discussing and sharing their thoughts on various genres. Whether you're a casual reader or a bookworm looking to meet like-minded individuals, this is the perfect group for you. Join us for lively discussions, book swaps, and social gatherings centered around our love for books. Come ready to share your favorite reads and discover new ones with fellow book lovers. Let's embark on literary adventures together and connect through our shared passion for reading.",
            "logo": "https://lxnzcyuzjvmdlgizhwwq.supabase.co/storage/v1/object/public/event-images/book.webp?t=2024-09-23T04%3A35%3A08.316Z",
            "members": null,
            "name": "The Reading Circle Book Club",
            "owner_id": 41
        },
        {
            "community_id": 10,
            "created_at": "2024-09-23T04:16:51.897378+00:00",
            "description": "The mission of The Community Restoration Project  Corp (CRP) is to provide families and individuals the resources to live productive lives.\nThe programs offered by CRP ensure that families and individuals have the tools they need to make this possible.",
            "logo": "https://lxnzcyuzjvmdlgizhwwq.supabase.co/storage/v1/object/public/event-images/CRP%20logo.png?t=2024-09-23T04%3A21%3A33.016Z",
            "members": null,
            "name": "Community Restoration Project",
            "owner_id": 47
        }
    ];

    const handleInputChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value,
        });
    };

    const handleLocationChange = (field, value) => {
        setFormData({
            ...formData,
            location: {
                ...formData.location,
                [field]: value,
            }
        });
    };

    const handleCommunitySelect = (community) => {
        setFormData({
            ...formData,
            community: community,
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({
                ...formData,
                imgFile: file, // Store the selected file
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Step 1: Upload the image first, if an image is selected
            let imageUrl = '';
            if (formData.imgFile) {
                const imageData = new FormData();
                imageData.append('file', formData.imgFile); // Append the image file

                const imageResponse = await fetch('https://my-project-1547014036843.uc.r.appspot.com/image_upload/uploadImage', {
                    method: 'POST',
                    body: imageData,
                });

                if (!imageResponse.ok) {
                    throw new Error('Image upload failed');
                }

                const imageResult = await imageResponse.json();
                imageUrl = imageResult.image_url; // Save the image URL from response
            }

            // Step 2: Prepare the event data for submission
            const eventData = {
                title: formData.title,
                tags: formData.tags.split(',').map(tag => tag.trim()), // Convert tags to array
                description: formData.description,
                start_datetime: formData.start_datetime.toISOString(), // Convert to ISO string
                end_datetime: formData.end_datetime.toISOString(),     // Convert to ISO string
                capacity: formData.capacity,
                location: {
                    address: formData.location.address,
                    zipcode: parseInt(formData.location.zipcode),
                    name: formData.location.name,
                },
                community_ids: [formData.community.community_id],
                image_url: imageUrl, // Include image URL if available
            };

            // Step 3: Submit the event details
            const eventResponse = await fetch('https://my-project-1547014036843.uc.r.appspot.com/event/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(eventData),
            });

            if (!eventResponse.ok) {
                throw new Error('Event submission failed');
            }

            const result = await eventResponse.json();
            console.log('Event submitted successfully:', result);
            onClose(); // Close the modal on successful submission
        } catch (error) {
            console.error('Error submitting event:', error);
        } finally {
            setLoading(false); // Stop the loader
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white z-50">
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">Event Form</h2>

            <FormInputField
                label="Title"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                placeholder="Enter event title"
            />

            <FormInputField
                label="Tags (comma-separated)"
                value={formData.tags}
                onChange={(e) => handleInputChange('tags', e.target.value)}
                placeholder="Enter tags (e.g., Tech, Networking)"
            />

            <FormInputField
                label="Description"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Enter description"
            />

            <div className="mb-4">
                <label className="block text-primary mb-2">Start Date & Time</label>
                <DatePicker
                    selected={formData.start_datetime}
                    onChange={(date) => handleInputChange('start_datetime', date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="yyyy-MM-dd h:mm aa"
                    className="w-full border border-secondary rounded p-2"
                />
            </div>

            <div className="mb-4">
                <label className="block text-primary mb-2">End Date & Time</label>
                <DatePicker
                    selected={formData.end_datetime}
                    onChange={(date) => handleInputChange('end_datetime', date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="yyyy-MM-dd h:mm aa"
                    className="w-full border border-secondary rounded p-2"
                />
            </div>

            <FormInputField
                label="Capacity"
                value={formData.capacity}
                onChange={(e) => handleInputChange('capacity', e.target.value)}
                placeholder="Enter capacity"
                type="number"
            />

            <h3 className="text-lg font-bold text-primary mb-2">Location</h3>
            <FormInputField
                label="Address"
                value={formData.location.address}
                onChange={(e) => handleLocationChange('address', e.target.value)}
                placeholder="Enter address"
            />
            <FormInputField
                label="Zipcode"
                value={formData.location.zipcode}
                onChange={(e) => handleLocationChange('zipcode', e.target.value)}
                placeholder="Enter zipcode"
                type="number"
            />
            <FormInputField
                label="Location Name"
                value={formData.location.name}
                onChange={(e) => handleLocationChange('name', e.target.value)}
                placeholder="Enter location name (e.g., Chipotle)"
            />

            <SearchableDropdown
                label="Community"
                options={communities}
                onChange={handleCommunitySelect}
            />

            {/* Image Upload Field */}
            <div className="mb-4">
                <label className="block text-primary mb-2">Upload Event Image</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full border border-secondary rounded p-2"
                />
            </div>

            {/* Loader */}
            {loading && (
                <div className="text-primary text-center mb-4">
                    <span style={{
                        border: '4px solid #f3f3f3',
                        borderRadius: '50%',
                        borderTop: '4px solid #6F3F63', // Primary color
                        width: '24px',
                        height: '24px',
                        animation: 'spin 1s linear infinite',
                    }}></span>
                    Submitting...
                </div>
            )}

            <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded w-full sm:w-auto hover:bg-opacity-90"
            >
                Submit
            </button>
        </form>
    );
};

export default EventForm;
