import React, { Fragment, useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";
import { createMessage, getMessages } from "@/api/api";
import dataGuest from "@/api/guest";
import { capitalizeEachWord, convertToLower, decodeAndReplace } from "@/lib/library-function";
import { useParams } from "next/navigation";

const GuestForm = () => {

  const { slug } = useParams();
  const [detailInvitation, setDetailInvitation] = useState(false);
  const name = decodeAndReplace(slug);
  const guestName = decodeAndReplace(name);

  const [messages, setMessages] = useState([]);
  const [formData, setFormData] = useState<any>({
    name: guestName,
    attendance: "1", // Default value as the first option
    message: "",
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false); // State to manage the visibility of the success modal


  const fetchData = async () => {
    const response = await fetch('/api/guest/get')
    const data = await response.json();
    setMessages(data);
  }

  // // Fetch messages on component mount
  // useEffect(() => {
  //   (async () => {
  //     fetchData()
  //   })();
  // }, []);

  useEffect(() => {
    (async () => {
      const fetchedMessages: any = await getMessages();
      setMessages(fetchedMessages);
    })();
  }, []);

  // Handle change in input fields
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  //   const handleSubmit = async (e: any) => {
  //     e.preventDefault();

  //     try {
  //         const response = await fetch('/api/guest/post', {
  //             method: 'POST',
  //             headers: {
  //                 'Content-Type': 'application/json'
  //             },
  //             body: JSON.stringify({ name: formData.name, attendance: formData.attendance, message: formData.message })
  //         });

  //         const data = await response.json();
  //         fetchData();

  //         // Reset form data
  //         setFormData({
  //             name: "",
  //             attendance: "1",
  //             message: ""
  //         });


  //       } catch (error) {
  //         console.error(error);
  //     }
  // };


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await createMessage(formData.name, formData.attendance, formData.message);
    // Optionally refetch messages after insertion
    const fetchedMessages: any = await getMessages();
    setMessages(fetchedMessages);

    setFormData({
      name: "",
      attendance: "1", // Default value as the first option
      message: "",
    })
    setShowSuccessModal(true); // Show success modal

  };
  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const [currentPage, setCurrentPage] = useState(1); // State to track current page
  const pageSize = 8; // Number of messages per page

  // Pagination functions
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  // Calculate the range of messages to display based on current page
  const indexOfLastMessage = currentPage * pageSize;
  const indexOfFirstMessage = indexOfLastMessage - pageSize;
  const currentMessages = messages.slice(indexOfFirstMessage, indexOfLastMessage);


  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="form-nama" className="text-sm">
            Nama
          </label>
          <input
            type="text"
            value={formData.name}
            className="px-4 py-2 border text-sm text-white rounded-md bg-transparent"
            name="name" // Changed to match state keys
            placeholder="Isikan Nama Anda"
            onChange={handleChange}
            
          />
        </div>
        <div className="my-4 flex flex-col gap-2">
          <label htmlFor="form-kehadiran" className="text-sm">
            Kehadiran
          </label>
          <select
            className="px-4 py-2 border text-sm text-white rounded-md bg-transparent"
            name="attendance" // Changed to match state keys
            onChange={handleChange}
            value={formData.attendance} // Add value attribute
          >
            <option value="0" disabled>
              Konfirmasi Kehadiran
            </option>
            <option value="1">Hadir</option>
            <option value="2">Berhalangan Hadir</option>
          </select>
        </div>
        <div className="my-4 flex flex-col gap-2">
          <label htmlFor="form-pesan" className="text-sm">
            Ucapan & Doa
          </label>
          <textarea
            className="px-4 py-2 border text-sm text-white rounded-md bg-transparent"
            name="message" // Changed to match state keys
            placeholder="Tulis Ucapan & Doa"
            onChange={handleChange}
            value={formData.message} // Add value attribute
          ></textarea>
        </div>
        <div className="">
          <button
            type="submit"
            className="w-full justify-center flex mx-auto px-4 py-2 bg-blue-700 rounded-md text-center gap-2"
          >
            Kirim <Send />
          </button>
        </div>
      </form>
      <div className="w-full rounded-4 mt-4 mb-2" id="daftar-ucapan">
        <ol className="relative border-gray-200 dark:border-gray-400 ">
          {
            currentMessages.map((message: any, index) => {
              return (
                <li className="" key={index}>
                  <div className="mb-4 items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                    <div>
                      <div className="flex gap-2">
                        <h2 className="font-bold text-md"> {message.name} </h2>
                        <span className="bg-gray-100 text-gray-800 text-xs font-normal px-2.5 py-0.5 h-5 rounded dark:bg-gray-600 dark:text-gray-300">
                          {message.attendance === "1" ? "Hadir" : "Berhalangan Hadir"}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm">{message.message}</p>
                      </div>
                    </div>

                    <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                      {new Date(message.created_at).toISOString().slice(0, 10)}
                    </time>
                  </div>
                </li>
              )
            })
          }
        </ol>
        <div className="flex justify-between mt-4">
          <button onClick={prevPage} disabled={currentPage === 1} className="px-4 py-2 bg-blue-700 rounded-md text-white">
            Previous
          </button>
          <button onClick={nextPage} disabled={indexOfLastMessage >= messages.length} className="px-4 py-2 bg-blue-700 rounded-md text-white">
            Next
          </button>
        </div>
      </div>
      {showSuccessModal && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg className="h-6 w-6 text-blue-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg font-medium text-gray-900" id="modal-title">Sukses mengirim pesan!</h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">Pesan kamu telah tersampaikan.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button onClick={closeSuccessModal} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default GuestForm;
