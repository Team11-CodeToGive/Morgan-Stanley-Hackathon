import { AlertTriangle } from "lucide-react";
import { isLoggedIn } from "@/utils/userUtils";
import Modal from "./Modal";
import { useState } from "react";


export default function FloatingReportButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            {isLoggedIn() && < button
                onClick={openModal}
                className="fixed bottom-4 left-4 z-10 bg-red-500 text-white rounded-full shadow-lg p-4 flex items-center justify-center hover:bg-red-700 transition cursor-pointer"
            >
                <AlertTriangle className="w-5 h-5" ></AlertTriangle>
            </button>}
            <Modal formType="report" isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};