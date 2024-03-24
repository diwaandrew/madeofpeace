import { MapPinned, Send } from "lucide-react";
import Link from "next/link";
import Countdown from "./CountDown";
import FadeInComponent from "./FadeInComponent";
import GuestForm from "./GuestForm";
import Music from "./Music";
import Image from "next/image";

const Main = ({ className }: any) => {
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
                  src="/esa1.jpg"
                  alt="WOMAN"
                  width={190}
                  height={70}
                  priority
                />
                <div className="my-4">
                  <h1 className="font-sacramento text-4xl">
                    Eka Selvi Anggraeni
                  </h1>
                  <p className="mt-3 mb-0">Putri</p>
                  <p className="mb-0">Bapak Untung Sugiarto & Ibu Nuraeni</p>
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
                  src="/diw1.jpg"
                  alt="MAN"
                  width={190}
                  height={70}
                  priority
                />
                <div className="my-4">
                  <h1 className="font-sacramento text-4xl">
                    Andre Diwa Aji Pratama
                  </h1>
                  <p className="mt-3 mb-0">Putra</p>
                  <p className="mb-0">
                    Bapak Bangun Wasono & Ibu Didik Nuryanti
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
            data-aos="fade-up"
            data-aos-duration="2000"
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
      <section className="container mx-2">
        <div>
          <FadeInComponent fadeDirection="down" delay={0.18}>
            <h1 className="font-sacramento my-4 text-center text-4xl md:text-8xl py-3">
              Awal Pertemuan
            </h1>
          </FadeInComponent>

          <div className="col-md-12 col-md-offset-0">
            <ul className="timeline animate-box">
            <li>
                <div

                >
                  <Image width={160}  height={160} alt="gambar 1" className="badge-image" src="/memo11.jpg" />

                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Cerita Awal</h3>
                    <span className="date">2018</span>
                  </div>
                  <div className="timeline-body">
                    <p>
                    Katanya, pertemuan pertama dengan orang baru selalu tidak terduga. 
                    Ya, itu juga terjadi pada kami. Melalui sebuah pertemuan kecil dan singkat itu, ternyata perkenalan itu berlanjut.
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div

                
                >
                  <Image width={160}  height={160} alt="gambar 2" className="badge-image" src="/memo21.jpg" />

                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Kembali Berjumpa</h3>
                    <span className="date">2019</span>
                  </div>
                  <div className="timeline-body">
                    <p>
                    Selayaknya orang pdkt pada umumnya, kami juga melakukan hal yang sama. 
                    Bedanya, setelah itu kami mengambil waktu sendiri karena kesibukan dan kehidupan masing-masing. {" "}
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div

                >
                   <Image width={160}  height={160} alt="gambar 3" className="badge-image" src="/memo31.jpg" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Kisah Kasih</h3>
                    <span className="date">2021</span>
                  </div>
                  <div className="timeline-body">
                    <p>
                    Tahun dimana tiba2 semua ada jalan untuk kembali bertemu 
                    dan kali ini lebih intens untuk mengenal satu sama lain. 
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div
                  
                >
                  <Image width={160}  height={160} alt="gambar 4" className="badge-image" src="/memo41.jpg" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Langkah</h3>
                    <span className="date">2024</span>
                  </div>
                  <div className="timeline-body">
                    <p>
                    Dimulai dari tahun ini dan tahun-tahun berikutnya, 
                    kami berkomitmen untuk membersamai satu sama lain dalam susah, 
                    senang dan nano nano kehidupan yang lain. Selamanya. Doain kita guysss{" "}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="dark-section" id="tanggal">
        <div className="">
          <div className="text-center">
            <h1 className="font-sacramento my-4 text-4xl md:text-8xl py-3">
              Waktu Menuju Acara
            </h1>
            <Countdown />

            <p className="text-xs mt-4 mx-4 py-2">
              Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta`ala,
              insyaAllah kami akan menyelenggarakan acara :
            </p>

            <div className="overflow-x-hidden">
              <div
                className="py-2"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <h1 className="font-sacramento text-4xl">Akad</h1>
                <p className="font-bold text-sm">Pukul 10.00 WIB - Selesai</p>
              </div>

              <div
                className="py-2"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <h1 className="font-sacramento text-4xl">Resepsi</h1>
                <p className="font-bold text-sm">Pukul 13.00 WIB - Selesai</p>
              </div>
            </div>

            <div
              className="mx-auto flex flex-col items-center py-4"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <Link
                href="https://goo.gl/maps/emMJszRiX6uT2NKq5"
                target="_blank"
                className="flex  items-center gap-2 rounded-full text-sm items-center w-[300px] px-4 py-2 justify-center border"
              >
                <MapPinned />
                Lihat Google Maps
              </Link>
              <p className="mb-0 mt-2 mx-1 pb-4" style={{ fontSize: 0.9 }}>
                Dusun Beber Kejene, Rt. 54 Rw. 05 Randudongkal - Pemalang.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full" id="ucapan">
        <div className="flex flex-col items-center">
          <div className="w-full mx-8 border rounded-md shadow p-3">
            <h1 className="text-center font-sacramento my-4 text-4xl md:text-8xl py-3">
              Ucapan & Doa
            </h1>
            <div className="mb-1" id="balasan"></div>

            <GuestForm />
            
          </div>
        </div>
      </section>
      <Music/>
    </main>
  );
};

export default Main;
