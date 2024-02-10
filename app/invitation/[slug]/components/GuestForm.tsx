import React, { Fragment, useEffect, useState } from "react";
import { Send } from "lucide-react";
import { createMessage, getMessages } from "@/api/api";

const GuestForm = () => {
  const [messages, setMessages] = useState([]);
  const [formData, setFormData] = useState<any>({
    name: "",
    attendance: "1", // Default value as the first option
    message: "",
  });

  // Fetch messages on component mount
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
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await createMessage(formData.name, formData.attendance, formData.message);
    // Optionally refetch messages after insertion
    const fetchedMessages: any = await getMessages();
    setMessages(fetchedMessages);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="form-nama" className="text-sm">
            Nama
          </label>
          <input
            type="text"
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
          >
            <option value="0" disabled>
              Konfirmasi Kehadiran
            </option>
            <option value="1">Hadir</option>
            <option value="2">Berhalangan</option>
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
                messages.map((message:any, index) => {
                    return(
<li className="" key={index}>
            <div className="mb-4 items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
              <div>
                <div className="flex gap-2">
                  <h2 className="font-bold text-md"> {message.name} </h2>
                  <span className="bg-gray-100 text-gray-800 text-xs font-normal px-2.5 py-0.5 h-5 rounded dark:bg-gray-600 dark:text-gray-300">
                    {message.attendance}
                  </span>
                </div>
                <div>
                  <p className="text-sm">{message.message}</p>
                </div>
              </div>

              <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                {message.created_at}
              </time>
            </div>
          </li>
                    )
                })
            }
          
        </ol>
      </div>
    </Fragment>
  );
};

export default GuestForm;
