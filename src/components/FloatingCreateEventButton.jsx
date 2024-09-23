import { isLoggedIn } from "@/utils/userUtils";
import Modal from "./Modal";
import { useState } from "react";
import {  PlusIcon } from "lucide-react";


export default function FloatingCreateEventButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="">
            {isLoggedIn() && < button
                onClick={openModal}
               className="fixed z-50 float-end bottom-4 right-4 bg-accent text-white rounded flex justify-center p-3 px-5  hover:bg-orange-300 transition cursor-pointer"
            >
                Create New Event<PlusIcon className="w-5 h-5 ms-1 my-auto" />
            </button>}
            <Modal formType="event" isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};