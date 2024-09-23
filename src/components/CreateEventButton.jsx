import { isLoggedIn } from "@/utils/userUtils";
import Modal from "./Modal";
import { useState } from "react";
import {  PlusIcon } from "lucide-react";


export default function CreateEventButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="">
            {isLoggedIn() && < button
                onClick={openModal}
                className=" bg-accent text-white rounded flex justify-center shadow-lg p-2  hover:bg-orange-300 transition cursor-pointer"
            >
                Create <PlusIcon className="w-5 h-5 ms-1 my-auto" />
            </button>}
            <Modal formType="event" isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};