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
            community_id: 1,
            description: "We love tech!",
            logo: "logo_url_here",
            members: [6],
            name: "Tech Enthusiasts",
            owner_id: 6,
        },
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
