import Image from "next/image";
import { IoClose } from "react-icons/io5";

export default function Modal({ show, message, onClose }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/3">
        <div className="flex justify-end">
          <button onClick={onClose}>
            <IoClose className="text-xl" />
          </button>
        </div>
        <div className="mt-2 mb-4 mr-12 ml-12 text-center flex flex-col items-center">
            <Image
                src="/message.png"
                width={180}
                height={180}
                alt="Illustration of post officer holding a letter envelope"
                className="rounded-full object-cover lg:w-[250px] lg:h-[250px]"
            >
            </Image>
            <h2 className="text-2xl font-semibold mb-4">Your message has been sent successfully!</h2>
            <p className="text-md lg:text-lg">{message}</p>
        </div>
      </div>
    </div>
  );
}
