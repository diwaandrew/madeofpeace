import dataGuest from "@/api/guest";
import { convertToLower } from "@/lib/library-function";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";

export default function Home() {

  dataGuest.forEach(guest => {
    const { name, id } = guest;
    redirect(`/invitation/${convertToLower(name)}`);
  });

  // Placeholder content or null if you're only performing redirects
  return null; 
}
