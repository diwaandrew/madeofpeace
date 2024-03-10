/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import dataGuest from "@/api/guest";
import { capitalizeEachWord, convertToLower, decodeAndReplace } from "@/lib/library-function";
import { MailSearch } from "lucide-react"
import Image from "next/image"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";



const Header = ({onClick, text}:any) => {
    const { slug } = useParams();
    const [detailInvitation, setDetailInvitation] = useState(false);
    const name = decodeAndReplace(slug);
  
    const [guest, setGuest] = useState("");
    useEffect(() => {
      document.title = `Dear ${name}`;
      dataGuest.map((guest) => setGuest(convertToLower(guest.name)));
    }, [name]);
    
    const openInvitationHandler = () => {
        onClick()
    };
  
    const guestName = decodeAndReplace(name);
  
    return(
<header>
        <div>
          <div className="flex justify-center items-center h-screen aurora">
            <div className="my-8 flex flex-col items-center text-center bg-no-repeat bg-center ">
              <div className="my-4">
                <img
                  width={"70px"}
                  src="data:image/png;base64,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"
                />{" "}
              </div>
              <h1 className="font-sacramento mb-6 text-4xl text-white">The Wedding Of</h1>
              <div className="relative flex place-items-center">
                <Image
                  className="rounded-full shadow-md white"
                  src="/bg.jpeg"
                  alt="Next.js Logo"
                  width={190}
                  height={70}
                  priority
                />
              </div>

              <h1 className="font-sacramento my-4 text-4xl md:text-8xl text-white">
                Selvi & Diwa
              </h1>

              <h2 className="text-white"> Dear {capitalizeEachWord(guestName)}</h2>
              <button
                className="flex gap-2 px-4 py-2 my-4 rounded-md bg-gray-300 text-black"
                onClick={() => openInvitationHandler()}
              >
                
                {text}
              </button>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header