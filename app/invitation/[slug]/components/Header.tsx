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
            <div className="my-8 flex flex-col items-center text-center bg-no-repeat bg-center text-black">
              <div className="my-4">
                <img
                  width={"80px"}
                  src="/wedding-rings.svg"
                />{" "}
              </div>
              <h1 className="font-sacramento mb-6 text-4xl">The Wedding Of</h1>
              <div className="relative flex place-items-center">
                <Image
                  className="rounded-full shadow-md white"
                  src="/welcome3.jpg"
                  alt="Next.js Logo"
                  width={190}
                  height={70}
                  priority
                />
              </div>

              <h1 className="font-sacramento my-4 text-4xl md:text-8xl">Selvi & Diwa</h1>
              <h1 className="mb-6">Rabu, 17 April 2024</h1>

              <h2> Dear {capitalizeEachWord(guestName)}</h2>
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