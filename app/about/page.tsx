import Image from "next/image";

export default function Page() {
    return (
            <div className="flex justify-center items-center h-screen">
                <div className="font-sacramento text-center bg-no-repeat bg-center ">
                    <h1 className="mb-6 text-2xl">The Wedding Of</h1>
                        <div className="relative flex place-items-center before:absolute before:h-[20px] before:w-full sm:before:w-[10px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[10] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                            <Image
                                className="rounded-full shadow-md white"
                                src="/bg.jpeg"
                                alt="Next.js Logo"
                                width={190}
                                height={70}
                                priority
                            />
                        </div>
                        
                    <h1 className="my-4 text-2xl">Selvi & Diwa</h1>

                    <h2> Kepada : aaa</h2>
                </div>
            </div>
    );
}