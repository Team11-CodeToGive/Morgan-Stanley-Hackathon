import  { useState } from 'react';
import FormInputField from './FormInputField';
import SearchableDropdown from './SearchableDropdown';

const ReportForm = ({onClose}) => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        title: '',
        description: '',
        city: '',
        community: null,
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
                imgFile: file, // Store the file
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const dataToSend = new FormData();
            if (formData.imgFile) {
                dataToSend.append('file', formData.imgFile); // Append the image file
            }
            const response = await fetch('https://my-project-1547014036843.uc.r.appspot.com/image_upload/uploadImage', {
                method: 'POST',
                body: dataToSend,
            });

            if (!response.ok  && response.body.error !== 'Duplicate') {
                throw new Error('Network response was not ok');
            }

            // Optionally handle the response
            const result = await response.json();
            console.log('Image submitted successfully:', result);
            // Prepare the data for the API call
        const dataToSendReport = {
            user: formData.name,
            title: formData.title,
            description: formData.description,
            location: formData.location,
            img: result.image_url, // Include image URL here
        };

        try {
            const response = await fetch('https://my-project-1547014036843.uc.r.appspot.com/report/createIssueReport', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Optionally handle the response
            const result = await response.json();
            console.log('Report submitted successfully:', result);
            onClose(); // Close the modal on successful submission
        } catch (error) {
            console.error('Error submitting report:', error);
        }
        } catch (error) {
            console.error('Error submitting image:', error);
        }finally{
                setLoading(false); // Stop loading when the process finishes
        }

    };

    return (
        <form onSubmit={handleSubmit} className="bg-white " >
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">Report Form</h2>

            <FormInputField
                label="Name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter your name"
            />
            <FormInputField
                label="Title"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                placeholder="Enter report title"
            />
            <FormInputField
                label="Description"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Enter description"
            />
            <FormInputField
                label="City"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                placeholder="Enter city"
            />

            <SearchableDropdown
                label="Community"
                options={communities}
                onChange={handleCommunitySelect}
            />

            <div className="mb-4">
                <label className="block text-primary mb-2">Upload Image</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full border border-secondary rounded p-2"
                    required
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
                        }}></span> {/* Add loader styles in CSS */}
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

export default ReportForm;
