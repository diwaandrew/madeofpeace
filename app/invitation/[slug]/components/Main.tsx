import { MapPinned, Send } from "lucide-react";
import Link from "next/link";
import Countdown from "./CountDown";
import FadeInComponent from "./FadeInComponent";
import GuestForm from "./GuestForm";
import Music from "./Music";
import Image from "next/image";
import React, {useState} from "react";
import 'react-toastify/dist/ReactToastify.css';

const Main = ({ className }: any) => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [newImage, setNewImage] = useState("");

  const togglePreview = (code :any) => {

      setPreviewVisible(!previewVisible);
      if(code===1){
        setNewImage('/memo11.jpg')
      }else if (code===2){
        setNewImage('/memo21.jpg')
      }else if (code===3){
        setNewImage('/memo31.jpg')
      }else{
        setNewImage('/memo41.jpg')
      }

      setPreviewVisible(true)
      setTimeout(() => {
        setPreviewVisible(false)
      }, 1500)
      return;
  };

  return (
    <main className={`container mx-auto ${className}`}>
      <div className="flex flex-col items-center" id="mempelai">
        <div className="text-center">
          <FadeInComponent fadeDirection="down" delay={0.2}>
            <h1 className="mt-8 font-arabic py-4 px-2 text-2xl ">
              بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
            </h1>
          </FadeInComponent>
          <FadeInComponent fadeDirection="down" delay={0.4}>
            <h1 className="font-esthetic py-4 px-2 font-sacramento text-3xl ">
              Assalamualaikum Warahmatullahi Wabarakatuh
            </h1>
          </FadeInComponent>

          <FadeInComponent fadeDirection="down" delay={0.6}>
            <p className="pb-3 px-3 text-sm ">
              Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i
              serta kerabat sekalian untuk menghadiri acara pernikahan kami:
            </p>
          </FadeInComponent>

          <div className="flex flex-col items-center">
            <FadeInComponent fadeDirection="left" delay={0.1}>
              <div className="flex flex-col items-center">
                <Image
                  className="w-[300px] rounded-full profile-image"
                  //src="/esa1.jpg"
                  src="/bayu/cewe.png"
                  alt="WOMAN"
                  width={190}
                  height={70}
                  priority
                />
                <div className="my-4">
                  <h1 className="font-sacramento text-4xl">
                    Nadiya Amalia Putri
                  </h1>
                  <p className="mt-3 mb-0">Putri</p>
                  <p className="mb-0">Bapak Budi Waloyo & Ibu Laila Annahaar</p>
                </div>
              </div>
            </FadeInComponent>

            <FadeInComponent fadeDirection="down" delay={0.12}>
              <h1 className="font-sacramento my-4 text-8xl ">&amp;</h1>
            </FadeInComponent>

            <FadeInComponent fadeDirection="right" delay={0.14}>
              <div
                className="flex flex-col items-center" // Apply fade-right here
              >
                <Image
                  className="w-[300px] rounded-full border border-3 border-light shadow profile-image"
                  //src="/diw1.jpg"
                  src="/bayu/cowo.png"
                  alt="MAN"
                  width={190}
                  height={70}
                  priority
                />
                <div className="my-4">
                  <h1 className="font-sacramento text-4xl">
                    Bayu Eka Wibowo
                  </h1>
                  <p className="mt-3 mb-0">Putra</p>
                  <p className="mb-0">
                    Bapak Senin & Ibu Dwi Handayani
                  </p>
                </div>
              </div>
            </FadeInComponent>
          </div>
        </div>
      </div>
      <section className="my-16">
        <FadeInComponent fadeDirection="down" delay={0.16}>
          <div
            className="flex flex-col items-center text-center"
          >
            <h1 className="font-sacramento text-4xl mt-0 mb-3">
              Allah Subhanahu Wa Ta`ala berfirman
            </h1>

            <p className="mx-8 text-sm md:text-md md:mx-48">
              Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
              pasangan-pasangan untukmu dari jenismu sendiri, agar kamu
              cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di
              antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu
              benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang
              berpikir.
            </p>

            <span className="mb-0">
              <strong>QS. Ar-Rum Ayat 21</strong>
            </span>
          </div>{" "}
        </FadeInComponent>
      </section>
      {/*  */}
      <section className="dark-section" id="tanggal">
        <div className="">
          <div className="text-center">
            <FadeInComponent fadeDirection="down" delay={0.18}>  
              <h1 className="font-sacramento my-4 text-4xl md:text-8xl py-3">
                Waktu Menuju Acara
              </h1>
            </FadeInComponent>  

            <FadeInComponent fadeDirection="left" delay={0.18}>
              <Countdown />
            </FadeInComponent>

            <FadeInComponent fadeDirection="right" delay={0.18}>
              <p className="text-xs mt-4 mx-4 py-2">
                Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta`ala,
                insyaAllah kami akan menyelenggarakan acara :
              </p>
            </FadeInComponent>

            <div className="overflow-x-hidden">
              <FadeInComponent fadeDirection="left" delay={0.18}>
                <p className="font-bold text-sm pb-5">Minggu, 10 November 2024</p>
              </FadeInComponent>
              <FadeInComponent fadeDirection="down" delay={0.18}>  
                <h1 className="font-sacramento text-4xl">Akad</h1>
              </FadeInComponent>
              <FadeInComponent fadeDirection="left" delay={0.18}>  
                <p className="font-bold text-sm">Pukul 08.00 WIB</p>
              </FadeInComponent>
              <FadeInComponent fadeDirection="down" delay={0.18}>
                <h1 className="font-sacramento text-4xl pt-10">Resepsi</h1>
              </FadeInComponent>
              <FadeInComponent fadeDirection="left" delay={0.18}>
                <p className="font-bold text-sm">Pukul 10.00 - 13.00 WIB</p>
              </FadeInComponent>
            </div>

            <FadeInComponent fadeDirection="down" delay={0.18}>
              <div
                className="mx-auto flex flex-col items-center py-2"
              >
                <Link
                  //href="https://goo.gl/maps/emMJszRiX6uT2NKq5"
                  href="https://maps.app.goo.gl/8bYwYE8Ekv85c9pe6"
                  target="_blank"
                  className="flex  items-center gap-2 rounded-full text-sm items-center w-[300px] px-4 py-2 justify-center border"
                >
                  <MapPinned />
                  Lihat Google Maps
                </Link>
              </div>
            </FadeInComponent>
            <FadeInComponent fadeDirection="left" delay={0.18}>  
              <p className="text-xs mt-2 pb-4">
                 Gedung Graha Adi, Jl. Balas Klumprik No.156, Balas Klumprik, Kec. Wiyung, Surabaya, Jawa Timur 60222
              </p>
            </FadeInComponent>
          </div>
        </div>
      </section>

      <section className="w-full" id="ucapan">
        <div className="flex flex-col items-center">
          <div className="w-full mx-8 border rounded-md shadow p-3">
            <FadeInComponent fadeDirection="down" delay={0.18}>
              <h1 className="text-center font-sacramento my-4 text-4xl md:text-8xl py-3">
                Ucapan & Doa
              </h1>
              <div className="mb-1" id="balasan"></div>
            </FadeInComponent>
            <GuestForm />
            
          </div>
        </div>
      </section>
      <Music/>
    </main>
  );
};

export default Main;

const CustomToast = (props:any) => {
  return (
    <div className="fixed inset-0 z-[999] overflow-y-auto mx-auto bg-black bg-opacity-30 flex items-center justify-center">
      <div className="inline-block rounded-full text-left overflow-hidden transform transition-all sm:max-w-lg sm:w-full border-white">
        <div className="px-4 pt-2 pb-4 sm:p-6 sm:pb-4 rounded-full">
          <div className="sm:flex justify-center">
            <Image
              className="w-[300px] rounded-full border border-3 border-light shadow profile-image border-white"
              src={props.imageSrc}
              alt={props.imageAlt}
              width={props.imageWidth}
              height={props.imageHeight}
              priority
            /> 
          </div>
        </div>
      </div> 
    </div>
  );
};
