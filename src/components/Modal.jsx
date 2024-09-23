import ReportForm from './ReportForm';
import EventForm from './EventForm';
import { useEffect } from 'react';
import { X, XIcon } from 'lucide-react';

const Modal = ({ isOpen, onClose, formType }) => {

    useEffect(() => {
        console.log(isOpen)
    }, [isOpen]);


    if (!isOpen) return null;

    const renderForm = () => {
        switch (formType) {
            case 'report':
                return <ReportForm onClose={onClose} />;
            case 'event':
                return <EventForm onClose={onClose} />;
            // Add more cases here for other forms, like:
            // case 'feedback':
            //     return <FeedbackForm onClose={onClose} />;
            default:
                return null;
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg relative max-h-full overflow-y-auto ">
                {/* Close button */}
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    <XIcon className="w-6 h-6 bg-red-500 text-white rounded" />
                </button>

                {/* Render the appropriate form based on formType */}
                {renderForm()}
            </div>
        </div>
    );
};

export default Modal;
