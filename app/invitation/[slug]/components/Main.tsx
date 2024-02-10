import { MapPinned, Send } from "lucide-react";
import Link from "next/link";
import Countdown from "./CountDown";
import FadeInComponent from "./FadeInComponent";
import GuestForm from "./GuestForm";

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
                <div className="w-[300px] rounded-full border border-3 border-light shadow ">
                  <img src="/cewe.png" alt="cewe" />
                </div>
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
                <div className="w-[300px] rounded-full border border-3 border-light shadow">
                  <img src="/cowo.png" alt="cowo" />
                </div>
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
              <li className="jumpa-pertama">
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Jumpa Pertama </h3>
                    <span className="date">10 Oktober 2015</span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Pertama kali kami dipertemukan di sebuah acara malam
                      keakraban di kampus Universitas Dian Nuswantoro. Sebagai
                      seorang mahasiswa baru, kala itu Dinda melihat Indra
                      sedang sibuk memegang megaphone (toa) di tengah hiruk
                      pikuk acara. Belum ada sesuatu yang spesial, kala itu
                      justru Dinda melihat Indra banyak menerima surat pink
                      (tanda kagum) dari teman sesama mahasiswa barunya.
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div
                  className="timeline-badge"
                  style={{ backgroundImage: "url('/cowo.png')" }}
                ></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Kembali Berjumpa</h3>
                    <span className="date">9 September 2017</span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Konferensi Future Leader Summit 2017 kembali mempertemukan
                      mereka. Dinda sebagai peserta dan Indra sebagai panitia
                      acara. Mulai dari saling sapa, mereka berdua tumbuh
                      perasaan saling ingin mengenal lebih dalam. Seusai acara,
                      Indra memberanikan diri untuk membangun komunikasi dengan
                      Dinda. Dari pesan singkat pertama yang dikirimnya, Indra
                      dan Dinda mulai dekat dan menjadi lebih sering mengirim
                      kabar.{" "}
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="timeline-badge"
                  style={{ backgroundImage: "url('/cowo.png')" }}
                ></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Kisah Kasih di Kampus</h3>
                    <span className="date">Oktober 2017 - 2018</span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Sebagai sepasang mahasiswa dan mahasiswi, Dinda dan Indra
                      memilih untuk mengisi kisah kasih di kampusnya dengan
                      mengikuti berbagai kompetisi bersama. Kala itu, Dinda
                      adalah mahasiswi Ilmu Komunikasi dan Indra adalah
                      mahasiswa Teknik Informatika. Merupakan kolaborasi yang
                      pas jika mengikuti kompetisi teknologi, Indra berperan
                      sebagai seorang programmer dan Dinda sebagai seorang
                      content development. Dinda dan Indra pernah membuat
                      aplikasi Ayo Toba (Aplikasi Pariwisata Danau Toba) yang
                      diajukan dalam kompetisi IT FEST Universitas Sumatera
                      Utara di awal tahun 2018.
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div
                  className="timeline-badge"
                  style={{ backgroundImage: "url('/cowo.png')" }}
                ></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Jakarta &amp; Kroasia</h3>
                    <span className="date">2018 - 2019</span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Tidak selalu bersama, perjuangan dimulai ketika Indra
                      memutuskan untuk bekerja di Jakarta sebagai seorang
                      Software Engineer di Tokopedia. Belum usai masa LDR, pada
                      3 Oktober 2018, Dinda juga memutuskan untuk mengambil
                      beasiswa di University of Split, Kroasia. Di bulan
                      November 2018, Indra melangsungkan wisuda dan Dinda hanya
                      bisa memberi virtual support melalui video call.{" "}
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="timeline-badge"
                  style={{ backgroundImage: "url('/cowo.png')" }}
                ></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Kembali ke Indonesia</h3>
                    <span className="date">3 Maret 2019</span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Periode belajar di Kroasia telah selesai. Akhirnya Dinda
                      kembali ke Indonesia! Ada tanggung jawab yang harus Dinda
                      selesaikan seusai dari Kroasia, yakni harus menyelesaikan
                      skripsi dan mencapai target untuk wisuda di bulan Agustus
                      2019. Selain itu, kembalinya Dinda ke Indonesia menjadi
                      momen yang tepat bagi Indra untuk menyampaikan niat ingin
                      serius kepada orang tua Dinda. Hal itu disambut baik oleh
                      kedua orang tua mereka dan sepakat akan melaksanakan acara
                      Ndodok Lawang usai Dinda wisuda. Sebelum wisuda, Dinda
                      sudah harus meniti karir di Jakarta sebagai seorang
                      Content Analyst di Ruangguru.
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div
                  className="timeline-badge"
                  style={{ backgroundImage: "url('/cowo.png')" }}
                ></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Ndodok Lawang</h3>
                    <span className="date">31 Agustus 2019</span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Akhirnya tiba di masa Indra dan keluarga hadir ke rumah
                      Dinda untuk menyampaikan niat baik. Mulai dari acara
                      Ndodok Lawang ini, dilanjutkan dengan persiapan pernikahan
                      yang insha Allah akan diselenggarakan pada tanggal 3
                      Oktober 2020.
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
    </main>
  );
};

export default Main;
